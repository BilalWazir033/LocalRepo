const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});
console.log("we are with yoiu");
console.log("how are you");
console.log("we are with you again");
console.log("its a fomrality that i hate too much");
console.log("we are again with you");