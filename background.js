console.log("background is running");

let PORT = 3000;
const url = (ip, path) => {return "http://" + ip + ":" + PORT + "/" + path}

let ip = "192.168.1.49"

let xhr = new XMLHttpRequest();

console.log("connected to port :", PORT);

const postJson = (message) => {
		console.log(url(ip, message.api))
		xhr.open("POST", url(message.ip, message.api), true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(message.content));
}

chrome.runtime.onMessage.addListener(
	(message, sender, sendResponse) => {
		console.log("click :", message);
		postJson(message);
	}
)