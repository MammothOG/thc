const axios = require('axios');

const data = {
  session: 0, // 0(New session), 1, 2...
  status: "play", // pause
  move: "next", // end
  volume: 100, // 0 to 100
  addmode: "play", // append
  media: {
    service: "youtube", // local, twitch...
    start_time: 0, // in second
    file: "",
    http: "https://www.youtube.com/watch?v=fWNaR-rxAic&ab_channel=CarlyRaeJepsenVEVO",
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