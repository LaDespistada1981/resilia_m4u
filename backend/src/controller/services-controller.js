const servicesDAO = require('../DAO/services-DAO')

module.exports = (app, bd) => {

    const sDAO = new servicesDAO(bd)

//Recarga

app.post("/services/recharge", (req, resp) => {
  console.log("Vai uma recarga aí, filha?");
});

//Compra
app.post("/services/buy-chip", async (req, resp) => {
  try{
    const addChip = await sDAO.generateChip([req.body.msisdn, req.body.company, req.body.id_user]);
    resp.send(`Chip successfully generated!`)
   }
   catch(error){
     resp.send(error);
   }
})

//Faz registro de Venda
app.post("/services/sale", async (req, resp)=>{
  try{
    const addSale = await sDAO.generateSale([req.body.date, req.body.product, req.body.msisdn, req.body.amount, req.body.id_user, req.body.id_card]);
    resp.send(`Successful purchase.`)
  }catch(error){
    resp.send(error);
  }
});

//Gera registros de venda
app.get('/services/sale', async (req, resp)=>{
  try{
    const allSales = await sDAO.showSales();
    resp.send(allSales)

  }catch(error){
    resp.send(error);
  }});

//Histórico de Compras Usuário
app.get('/services/:USER_ID', async (req, resp)=>{
  try{
    const userEmail = await uDAO.getUserByEmail([req.params.ID_USER])
  
    resp.send(userEmail)
  }
  catch(error){
    resp.send(error)
  }
})


}
