console.log("background is running");

let ip = "localhost";
let port = 3000;

const addr = (ip, port) => { return "http://"+ip+":"+port+"/remote" }

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		console.log("addr :", addr(ip, port));
		console.log("click :", request);
	}
)