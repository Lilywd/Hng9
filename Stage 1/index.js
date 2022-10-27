const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;



// create  a server with http variable

const server = http.createServer(function(req,res) {
// headers

res.writeHead(200, {'content-Type':'application/json'}); //status code, content type object
const data = {
    "slackUsername" : "ndungulilianwanjiku",
    "backend" : "True",
    "age": 25,
    "bio": "I am in the learning process of becoming a fullstack developer with a passion in skincare as well",
}
res.json(data); //send back  response in json
});



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });