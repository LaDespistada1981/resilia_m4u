const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


//Landing page 
app.get('/', (req,resp) =>{
  console.log('Oi, eu sou a homepage!')
})

const userController = require('./controller/users-controller');
userController(app);

const serviceController = require('./controller/services-controller');
serviceController(app);

const creditCardsController = require('./controller/creditcards-controller');
creditCardsController(app) ;

app.listen(port, ()=>{
  console.log(`Server is running at port ${port}!`)
});