import { WebSocket, WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });
let sockets: Map<String, WebSocket> = new Map();
let chatMessages: String[] = [];

ws.on("connection", (socket) => {
  let currentUser = '';
  socket.send("Welcome to the Chat App");
  socket.send("Please enter a user name");
  socket.on("message", (message) => {
    const processedMessage: string = message ? message.toString().trim() : "";
    if (!currentUser && sockets.has(processedMessage)) {
      socket.send("Try again, username in use");
      return;
    } else if (!currentUser && !sockets.has(processedMessage)) {
      socket.send(`Welcome ${processedMessage}!`);
      chatMessages.forEach(message => {
        socket.send(message);
      });
      sockets.forEach((socket, _) => {
        socket.send(`${processedMessage} has joined the server`)
      });
      sockets.set(processedMessage, socket);
      currentUser = processedMessage;
    } else {
      // /dm user_name message
      const dm = processedMessage.startsWith("/dm");
      if (!dm) {
        const finalMessage = `${currentUser}: ${processedMessage}`
        sockets.forEach((value, key) => {
          if (key !== currentUser) {
            value.send(finalMessage);
          }
        });
        chatMessages.push(finalMessage);
        chatMessages.splice(10);
      } else {
        const dmTarget = processedMessage.split(" ")[1];
        const rawMessage = processedMessage.split(" ")[2];
        console.log(processedMessage, rawMessage);
        const finalMessage = `${currentUser}: ${rawMessage}`
        const target = sockets.get(dmTarget);
        if (target) {
          target.send(finalMessage);
        }
      }
    }
  });
  socket.on("close", () => {
    sockets.forEach((value, key) => {
      if (key !== currentUser) {
        value.send(`${currentUser} has left the server`);
      }
    });
    sockets.delete(currentUser);
  });
});