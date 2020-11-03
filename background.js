console.log("background is running");

let ip = "localhost";
let port = 3000;
const apiUrl = "http://" + ip + ":" + port + "/remote";
console.log("connected to :", apiUrl);

let xhr = new XMLHttpRequest();

const postJson = (jsonData) => {
		xhr.open("POST", apiUrl, true);
		xhr.setRequestHeader("Content-type", "application/json")
		xhr.send(JSON.stringify(jsonData))
}

chrome.runtime.onMessage.addListener(
	(request, sender, sendResponse) => {
		console.log("click :", request);
		postJson(request);
	}
)