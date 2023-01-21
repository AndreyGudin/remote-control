import { WebSocketServer } from 'ws';

import handleRequest from './modules/handleMouseMove';

const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
  ws.on('message', async function message(data) {
    console.log('received: %s', data);
    const answer = await handleRequest(data);
    ws.send(answer);
  });

  
});
