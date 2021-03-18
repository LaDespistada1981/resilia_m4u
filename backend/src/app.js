const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

app.use(bodyParser.json())

app.listen(port, ()=>{
  console.log("Server is running!")
});


//Landing page 
app.get('/', (req,resp) =>{
  console.log('Oi, eu sou a homepage!')
})

