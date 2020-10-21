const axios = require('axios');

const data = {
  session: 0, // 0(New session), 1, 2...
  status: "play", // pause
  move: "next", // previous, start, end
  media: {
    service: "youtube", // local, twitch...
    start_time: 0, // in second
    file: "",
    http: "",
  },
}

axios.post('http://127.0.0.1:3000/remote', data)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error.response.status);
    console.log(error.response.statusText);
  })
// using web
//fetch("/api", options)