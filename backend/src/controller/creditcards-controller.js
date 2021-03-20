const creditCardsDAO = require('../DAO/creditcards-DAO')
module.exports = (app,bd) =>{

    const cDAO = new creditCardsDAO(bd) 

app.post('/creditcards/register', async (req, resp)=>{
  try{
   const addCreditCard = await cDAO.collectCreditCard([req.body.type, req.body.brand, req.body.block_1, req.body.block_2, req.body.block_3, req.body.holder, req.body.expirationdate, req.body.id_user]);

   resp.send("Credit card successfully saved")
  }
  catch(error){
    resp.send(error);
  }

})

  app.get("/creditcards", (req, resp) =>{
    resp.send(creditCards)
  })
  
  app.get('/creditcards/:user_id', async (req, resp)=>{
      try{
          const userCards = await cDAO.cardsPerUser(req.params.card);
          resp.status(200).send(userCards)
        }
      catch(error){
          resp.send(error)
        }
  })
  
  app.delete('/creditcards/:id_card', async (req, resp)=>{
      try{
          const delCard = await cDAO.deleteCreditCard(req.params.card);
          resp.status(200).send(delCard);
      }
      catch(error){
          resp.send(error);
      }
  })
}