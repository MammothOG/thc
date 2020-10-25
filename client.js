const axios = require('axios');

const data = {
  session: 0, // 0(New session), 1, 2...
  //status: "pause", // pause, play
  //move: "next", // end, next
  //volume: 100, // 0 to 100
  addmode: "play", // append, play(default)
  //time: 0,
  media: {
    service: "youtube", // local, twitch...
    starttime: 0, // in second TODO checking integrity of data
    //file: "",
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