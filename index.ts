const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 }); // You can change the port number if needed

wss.on("connection", (ws: any) => {
  console.log("Client connected");

  // Listen for messages from the client
  ws.on("message", (message: string) => {
    // Log the received message (keystrokes)
    console.log("Received:", message.toString());
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
