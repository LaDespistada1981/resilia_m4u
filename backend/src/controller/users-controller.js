
//Login
app.post('/user/login', (req, resp) =>{
    console.log('Oi, eu sou o login')
  })
  
  //Cadastro de usuário
  
  app.get('/user/register/:id', (req, resp)=>{
    console.log("Oi, eu sou o seu cadastro")
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