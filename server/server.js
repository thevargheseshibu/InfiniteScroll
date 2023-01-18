

const express = require('express')
const axios = require('axios');
const app = express()
const port = 5000



app.get('/', (req, res) => {
    
axios.get('https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1')
.then(function (response) {
  // handle success
 // console.log(response.data.nodes);
  res.send(response.data.nodes)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})