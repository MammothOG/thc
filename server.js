// subber.js
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

// constant
IP = "127.0.0.1";
PORT = "3000";
SUBSCRIBER = "thc";

// socket configuration
sock.connect("tcp://" + IP + ":" + PORT);
sock.subscribe(SUBSCRIBER);
console.log("Publisher bound to port " + PORT);

sock.on("message", function (sub, msg) {
  // mess with the request
  var msgArray = msg.toString().split("|");
  var request = Number(msgArray[0]);
  if (Number.isNaN(request)) {
    console.warn("Request received is not a integer!")
  }
  else {
    var content = msgArray[1];
    youtubeParser(content.split())
  }
});

var youtubeParser = (content) => {
    console.log("Youtube link : " + typeof content);
}

var actionParser = (content) => {

}