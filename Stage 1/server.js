const http = require("http");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;



http.get('http://localhost:4000/', (res) => {

    let myData=''
    res.on('data', (chunk)=>{myData+=chunk})
    res.on('end', ()=>{
      try {const parsedData = JSON.parse(myData)
        console.log(parsedData)
      }catch(e){
        console.error(e.message)
      }
    })
})
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
res.end(JSON.stringify(data)); //send back  response in json
});



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });