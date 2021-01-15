const ws = new WebSocket("ws://localhost:5000");

ws.addEventListener('open', () => {
	console.log("We are connected");
})