import { WebSocket } from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("open");
  ws.send("Hello, server!");
});

ws.on("message", (message) => {
  console.log("message", message);
});