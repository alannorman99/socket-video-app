const Websocket = require('ws');

const wss = new Websocket.Server({ port: 5000 });

wss.on('connection', ws => {
	console.log("New Client connected!");

	ws.on('close', () => {
		console.log("Client has disconnected");
	})
})