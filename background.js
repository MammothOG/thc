console.log("background is running");

let PORT = 3000;
const url = (ip, path) => {return "http://" + ip + ":" + PORT + "/" + path}

let ip = "192.168.1.49"

let xhr = new XMLHttpRequest();

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
	console.log("click :", message);
		switch (message.type) {
			case "remote":
				postServer(message.content, "remote/");
				break;
			default:
				break;
		}
	}
);

chrome.storage.onChanged.addListener((changes, areaName) => {
	if (areaName === "local") {
		console.log(changes, areaName);
	}
});