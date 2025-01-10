import express, { Application } from "express";
import http from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { TypingStatus, User } from "./types";

export class App {
  private app: Application;
  private http: http.Server;
  private io: Server;
  activeUsers = new Map<string, User>();
  constructor() {
    this.app = express();
    this.http = http.createServer(this.app);
    this.io = new Server(this.http);
    this.listenSocket();
    this.setupRoutes();
  }

  listenServer() {
    this.http.listen(3000, () => {
      console.log("server is running");
    });
  }

  listenSocket() {
    this.io.on("connection", (socket) => {
      console.log("id do user => ", socket.id);

      socket.on("register_user", (name: string) => {
        const user: User = {
          id: uuidv4(),
          name,
          socketId: socket.id,
        };

        this.activeUsers.set(socket.id, user);

        socket.emit("registration_successful", user);

        socket.emit("user_joined", user);

        const userList = Array.from(this.activeUsers.values());
        socket.emit("active_users", userList);
      });

      socket.on("typing_start", () => {
        const user = this.activeUsers.get(socket.id);
        if (user) {
          socket.broadcast.emit("typing_status", {
            user,
            isTyping: true,
          } as TypingStatus);
        }
      });

      socket.on("typing_end", () => {
        const user = this.activeUsers.get(socket.id);
        if (user) {
          socket.broadcast.emit("typing_status", {
            user,
            isTyping: false,
          } as TypingStatus);
        }
      });

      socket.on("disconnect", () => {
        const user = this.activeUsers.get(socket.id);
        if (user) {
          this.activeUsers.delete(socket.id);
          socket.broadcast.emit("user_left", user);
        }
      });

      socket.on("message", (msg) => {
        this.io.emit("message", msg);
      });
    });
  }
  setupRoutes() {
    this.app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });
  }
}

const app = new App();

app.listenServer();
