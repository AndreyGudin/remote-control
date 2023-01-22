import { WebSocketServer, createWebSocketStream } from "ws";

import handleRequest from "./modules/handleRequest";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
  ws.send("Connected");
  const stream = createWebSocketStream(ws, { decodeStrings: false });
  stream.on('readable',async () => {
    let request = stream.read().toString();
    const answer = await handleRequest(ws, request);
    stream.write(answer);
  })

});
