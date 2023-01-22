import { WebSocketServer } from "ws";

import handleRequest from "./modules/handleRequest";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
  ws.send("Connected");
  ws.on("message", async function message(data) {
    const answer = await handleRequest(ws, data);
    ws.send(answer);
  });
});
