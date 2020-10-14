// pubber.js
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

// constant
SUBSCRIBER = "thc";

// config
ip = "127.0.0.1";
port = "5555";

// socket configuration
sock.bindSync("tcp://"+ ip +":" + port);
console.log("Publisher bound to port " + port);

// format message
var message = (msg) => {
  return [SUBSCRIBER, msg];
};

setInterval(function() {
    var demand = playStream("https://www.youtube.com/watch?v=t8FBDgl8C7s&ab_channel=Onliner");

    console.log("message => ", demand);
    sock.send(demand);
}, 500);

var playStream = (httpAddr) => {
  return message("1|" + httpAddr)
}
