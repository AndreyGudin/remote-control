import { WebSocketServer, createWebSocketStream } from "ws";

import handleRequest from "./modules/handleRequest";

const wss = new WebSocketServer({ port: 8080 });
console.log('Remote Control Server started');
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
