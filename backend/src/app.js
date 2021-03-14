const express = require('express');
const app = express();
const port = 8080;

app.listen(port, ()=>{
  console.log("Server is running!")
});


//Landing page 
app.get('/', (req,resp) =>{
  console.log('Oi, eu sou a homepage!')
})

// const usersController = require('./controller/users-controller')

// const creditCardsController = require('./controller/creditcards-controller')

// const servicesController = require('./controller/services-controller')


/* ROTAS
/homepage
/login
/register
/recharge
/chip-buy */


//Login - POST
//Cadastro de usuário - POST, UPDATE
//Cadastro de cartão - GET, POST, UPDATE, DELETE
//Compra de chip - POST
//Recarga - POST

