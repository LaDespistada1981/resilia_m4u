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
  app.get('/user', async (req, resp) => 
  {
    uDAO.showUsers().then(rows => resp.send(rows))
  })
  
  app.post('/user/register', async (req, resp)=>{
    try{
      const addUser = await uDAO.createUser([req.body.fullname, req.body.email, req.body.cpf, req.body.cnpj, req.body.password]);
      resp.send(`Usuário inserido com sucesso.`)
    }
    catch(error){
      resp.send(error);
    }

  })
  
  app.put('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o put do cadastro")
  })
  
  app.delete('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o delete do cadastro")
  })

}  