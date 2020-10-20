const axios = require('axios');

const data = {
  session: 0, // 0(New session), 1, 2...
  status: "play", // pause
  move: "next", // previous, start, end
  add: {
    service: "youtube", // local, twitch...
    time: 0, // in second
    file: "",
    http: "",
  },
}

axios.post('http://127.0.0.1:3000/remote', data)
// using web
//fetch("/api", options)