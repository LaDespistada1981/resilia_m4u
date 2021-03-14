const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.listen(port, ()=>{
  console.log("Server is running!")
});


//Landing page 
app.get('/', (req,resp) =>{
  console.log('Oi, eu sou a homepage!')
})

