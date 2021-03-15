const usersDAO = require('../DAO/users-DAO')
const bd = require('../infra/sqlite-db')

module.exports = (app, bd) => {

    const uDAO = new usersDAO(bd)

 
  //Cadastro de usuário

  app.get('/user/register', async (req, resp) => 
  {
          try{
              const answer = await uDAO.showUsers();
              resp.status(200).send(answer);
          }
          catch(error){
              resp.send(error);
          }
  })

  //Login
app.post('/user/login', (req, resp) =>{
  console.log('Oi, eu sou o login')
})
  
  app.get('/user/register/:id', async (req, resp) => 
  {
          try{
              const retorna = await tarDAO.listaTarefas();
              resp.status(200).send(retorna);
          }
          catch(error){
              resp.send(error);
          }
  })
  
  app.post('/user/register', (req, resp)=>{
    console.log("Oi, eu sou o post do cadastro")
  })
  
  app.put('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o put do cadastro")
  })
  
  app.delete('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o delete do cadastro")
  })

}  