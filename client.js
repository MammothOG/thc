const axios = require('axios');

const data = {
  "name": "felix",
  "pseudo": "mammoth"
}

axios
  .post('http://127.0.0.1:3000/api', data)
  .catch((error) => {
    console.error(error);
  })


// using web
//fetch("/api", options)