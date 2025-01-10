export interface User {
  id: string;
  name: string;
  socketId: string;
}

export interface TypingStatus {
  user: User;
  isTyping: boolean;
}

export interface ChatMessage {
  user: User;
  message: string;
  timestamp: Date;
}
