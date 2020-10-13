// pubber.js
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

// constant
SUBSCRIBER = "thc";

// config
ip = "192.168.0.27";
port = "3000";

// socket configuration
sock.bindSync("tcp://"+ ip +":" + port);
console.log("Publisher bound to port " + port);

// format message
var message = (msg) => {
  return [SUBSCRIBER, msg];
};

setTimeout(function() {
    var demand = playStream("https://www.youtube.com/watch?v=t8FBDgl8C7s&ab_channel=Onliner");

    console.log("message => ", demand);
    sock.send(demand);
}, 500);

var playStream = (httpAddr) => {
  return message("1|" + httpAddr)
}
