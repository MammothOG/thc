console.log("background is running");

let PORT = 3000;
const url = (ip, path) => {return "http://" + ip + ":" + PORT + "/" + path}

let ip = "192.168.1.49";
let isConnected = false;

let xhr = new XMLHttpRequest();
xhr.onerror = () => {
	console.warn('Warning: Server is unreachable!');
	isConnected = false;
}
xhr.onload = () => {
	console.log('Sended toward server with success!')
	isConnected = true;
}

console.log("connected to port :", PORT);

const postServer = (message, path) => {
	let urlAddr = url(ip, path);
	console.log('send to :', urlAddr);

	xhr.open("POST", urlAddr, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(message));
}

chrome.runtime.onMessage.addListener(
	(message, sender, sendResponse) => {
		if (isConnected === true) {
			switch (message.type) {
				case "remote":
					postServer(message.content, "remote/");
					break;
				default:
					break;
			}

		} else {
			console.warn('Warning: Server not connected!');
		}
	}
);

chrome.storage.onChanged.addListener((changes, areaName) => {
	if (areaName === "local") {
	if (changes.server_ip !== undefined) {
	if (changes.server_ip.oldValue !== changes.server_ip.newValue) {
		postServer({client: "chrome-ext"}, "connection/");
	}}}
});