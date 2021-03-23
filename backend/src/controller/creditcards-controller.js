const creditCardsDAO = require('../DAO/creditcards-DAO');
const generateHash = require('../crypto/hashGenerator');



module.exports = (app,bd) =>{

    const cDAO = new creditCardsDAO(bd) 

   //criptografia cartão
// app.post('/creditcards/register', async (req, resp)=>{
//   try{
//    const hash = generateHash(req.body.block_2)
//    const addCreditCard = await cDAO.collectCreditCard([req.body.type, req.body.brand, req.body.block_1, hash, req.body.block_3, req.body.holder, req.body.expirationdate, req.body.id_user]);
//    resp.send("Credit card successfully saved")
//   }
//   catch(error){
//     resp.send(error);
//   }

// })

app.post('/creditcards/register', async (req, resp)=>{
  try{
    const addCreditCard = cDAO.collectCreditCard([req.body.type, req.body.brand, req.body.number, req.body.holder, req.body.expirationdate, req.body.id_user])
    resp.send("Credit card successfully saved")
  }catch(error){
    resp.send(error);
  }
})

  app.get("/creditcards",async (req, resp) => {
      try{
          const cardsData = await cDAO.creditCardsDatabase();
          resp.status(200).send(cardsData);
        }
      catch(error){
          resp.send(error);
        }
  });
  
  app.get('/creditcards/:ID_USER', async (req, resp)=>{
      try{
          const userCards = await cDAO.cardsPerUser(req.params.ID_USER);
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