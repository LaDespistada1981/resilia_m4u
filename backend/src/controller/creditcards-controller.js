//Cadastro de cartão

app.post('/creditcards/register', (req, resp) =>{
    console.log ("POST cartão")
  })
  
  app.get('/creditcards/register/:id', (req, resp) =>{
    console.log ("GET cartão")
  })
  
  app.put('/creditcards/register/:id', (req, resp) =>{
    console.log ("PUT cartão")
  })
  
  app.delete('/creditcards/register/:id', (req, resp) =>{
    console.log ("DELETE cartão")
  })