const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  const data = {
    slackUsername: " ndungulilianwanjiku",
    backend: true,
    age: 25,
    bio: " I am in the learning process of becoming a fullstack developer with a passion in skincare as well"
  }
  return res.json(data)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


