const express = require('express');
const app = express();
const port = 8080;

app.listen(port, (require, response)=>{
  console.log("Server is running!")
});
