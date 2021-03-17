const usersDAO = require('../DAO/users-DAO')


module.exports = (app, bd) => {

    const uDAO = new usersDAO(bd)

    //Login
  app.post('/user/login', async  (req, resp) => {
          const user = await uDAO.getUserByEmailInDB(req.body.email)
          if(req.body.password === user.password){
              resp.send(`You're in`)} 
          else {
              resp.send(`Wrong password. Please try again.`)}  
      })
  

  //Register
  app.get('/user/register/:id', async (req, resp) => 
  {

  })
  
  app.post('/user/register', (req, resp)=>{
    resp.send(req.body.name, req.body.cpf, req.body.phone)
  })
  
  app.put('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o put do cadastro")
  })
  
  app.delete('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o delete do cadastro")
  })

}  