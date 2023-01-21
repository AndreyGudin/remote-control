import { WebSocketServer } from 'ws';

import handleMouseMove from './modules/handleMouseMove';

const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
  ws.on('message', async function message(data) {
    console.log('received: %s', data);
    const answer = await handleMouseMove(data);
    ws.send(answer);
  });

  
});
