import { WebSocketServer, createWebSocketStream } from "ws";

import handleRequest from "./modules/handleRequest";
const PORT=8080;
const wss = new WebSocketServer({ port: PORT });
console.log(`WebSocket Server started on port:${PORT}`);
wss.on("connection", function connection(ws) {
  ws.send("Connected");
  const stream = createWebSocketStream(ws, { decodeStrings: false });
  stream.on('readable',async () => {
    let request = stream.read().toString();
    const answer = await handleRequest(ws, request);
    stream.write(answer);
  })
  ws.on('close',() => console.log('WebSocket connection closed'));
});

process.on("SIGINT", () => {
  for(const client of wss.clients){
    client.terminate();
  }
  wss.close();
  console.log('WebSocket Closed');
});
