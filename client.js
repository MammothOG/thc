const axios = require('axios');

const data = {
  content: {
    service: "youtube", // local, twitch...
    path: "https://www.youtube.com/watch?v=Kw5tC5nQMRY&t=102s&ab_channel=TheCodingTrain"
  },
  params: {
    status: "stop" // run
  }
}

axios.post('http://127.0.0.1:3000/api', data)
// using web
//fetch("/api", options)