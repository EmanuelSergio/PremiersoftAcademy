import { io, Socket } from "socket.io-client";
import { User, TypingStatus, ChatMessage } from "../../types";

export class ChatClient {
  private socket: Socket;
  private user: User | null = null;
  private typingTimeout: NodeJS.Timeout | null = null;
  private messagesList: HTMLUListElement;
  private messageInput: HTMLInputElement;
  private form: HTMLFormElement;

  constructor() {
    this.socket = io();
    this.messagesList = document.getElementById("messages") as HTMLUListElement;
    this.messageInput = document.getElementById("input") as HTMLInputElement;
    this.form = document.getElementById("form") as HTMLFormElement;

    this.setupEventListeners();
    this.setupSocketListeners();
  }

  private setupEventListeners(): void {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.messageInput.addEventListener("input", () => {
      this.handleTyping();
    });
  }

  private setupSocketListeners(): void {
    this.socket.on("registration_successful", (user: User) => {
      this.user = user;
      this.addSystemMessage(`Bem-vindo, ${user.name}!`);
    });

    this.socket.on("user_joined", (user: User) => {
      this.addSystemMessage(`${user.name} entrou no chat`);
    });

    this.socket.on("user_left", (user: User) => {
      this.addSystemMessage(`${user.name} saiu do chat`);
    });

    this.socket.on("typing_status", (status: TypingStatus) => {
      this.updateTypingIndicator(status);
    });

    this.socket.on("message", (message: ChatMessage) => {
      this.addMessage(message);
    });

    this.socket.on("active_users", (users: User[]) => {
      console.log("Usuários ativos:", users);
    });
  }

  private handleSubmit(): void {
    const message = this.messageInput.value.trim();
    if (message && this.user) {
      const chatMessage: ChatMessage = {
        user: this.user,
        message: message,
        timestamp: new Date(),
      };

      this.socket.emit("message", chatMessage);
      this.messageInput.value = "";
    }
  }

  private handleTyping(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    this.socket.emit("typing_start");

    this.typingTimeout = setTimeout(() => {
      this.socket.emit("typing_end");
    }, 1000);
  }

  private addMessage(message: ChatMessage): void {
    const li = document.createElement("li");
    const isOwnMessage = message.user.id === this.user?.id;

    li.innerHTML = `
      <strong>${isOwnMessage ? "Você" : message.user.name}</strong>: ${
      message.message
    }
      <small>${new Date(message.timestamp).toLocaleTimeString()}</small>
    `;

    li.className = isOwnMessage ? "own-message" : "other-message";
    this.messagesList.appendChild(li);
    this.scrollToBottom();
  }

  private addSystemMessage(text: string): void {
    const li = document.createElement("li");
    li.className = "system-message";
    li.textContent = text;
    this.messagesList.appendChild(li);
    this.scrollToBottom();
  }

  private updateTypingIndicator(status: TypingStatus): void {
    const typingIndicator = document.getElementById("typing-indicator");
    if (!typingIndicator) return;

    if (status.isTyping) {
      typingIndicator.textContent = `${status.user.name} está digitando...`;
      typingIndicator.style.display = "block";
    } else {
      typingIndicator.style.display = "none";
    }
  }

  private scrollToBottom(): void {
    this.messagesList.scrollTop = this.messagesList.scrollHeight;
  }

  public registerUser(name: string): void {
    this.socket.emit("register_user", name);
  }
}
