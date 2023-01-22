import { WebSocketServer, createWebSocketStream } from "ws";

import handleRequest from "./modules/handleRequest";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
  ws.send("Connected");
  ws.on("message", async function message(data) {
    console.log('received: %s', data);
    const stream = createWebSocketStream(ws, {decodeStrings: false});
    const answer = await handleRequest(ws, data);
    stream.write(answer);
  });
});
