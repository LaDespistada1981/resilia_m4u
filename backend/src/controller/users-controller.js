const { hash } = require('bcrypt')
const usersDAO = require('../DAO/users-DAO')
const generateHash = require('../crypto/hashGenerator');


module.exports = (app, bd) => {

    const uDAO = new usersDAO(bd)

//Mostra todos usuários
  app.get('/user', async (req, resp) => 
  {
    uDAO.showUsers().then(rows => resp.send(rows))
  })

  app.get('/user/:EMAIL', async (req, resp)=>{
    try{
      const userEmail = await uDAO.getUserByEmail([req.params.EMAIL])
      resp.send(userEmail)
    }
    catch(error){
      resp.send(error)
    }
  })
  
  app.post('/user/register', async (req, resp)=>{
    try{
      const pwdCrypto = generateHash(req.body.password);
      const addUser = await uDAO.createUser([req.body.fullname, req.body.email, req.body.cpf, req.body.cnpj, pwdCrypto]);
      resp.send(`Usuário ${req.body.fullname} inserido com sucesso!`)
    }
    catch(error){
      resp.send(error);
    }
  });

  //Login
    app.post('/user/login', async  (req, resp) => {
      const user = await uDAO.getUserByEmailInDB(req.body.email)
        if(req.body.password === user.password){
          resp.send(`You're in`)} 
        else {
          resp.send(`Wrong password. Please try again.`)}  
    })

  
  app.put('/user/:EMAIL', async (req, resp)=>{
    let paramUpdate = [req.body.fullname, req.body.email, req.params.EMAIL]
    try{
      const updtUser = await uDAO.updateUser(paramUpdate);
      resp.send(updtUser);
    }catch(error){
      resp.send(error);
    }
  });

  app.put('/user/:EMAIL', async (req, resp)=>{
    try{
      const forgotPwd = uDAO.updatePwd([req.body.password, req.params.EMAIL])
      resp.send(forgotPwd);
    }catch(error){
      resp.send(error)
    }
  })
  
  app.delete('/user/:EMAIL', async (req, resp)=>{
    try{
      const deleteUser = await uDAO.delUser(req.params.EMAIL);
      resp.send(`Usuário ${req.params.EMAIL} deletado com sucesso.`)
    }catch(error){
      resp.send(error);
    }
  })

}  