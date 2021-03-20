const servicesDAO = require('../DAO/services-DAO')

module.exports = (app, bd) => {

    const sDAO = new servicesDAO(bd)

//Recarga

app.post("/services/recharge", (req, resp) => {
  console.log("Vai uma recarga aí, filha?");
});

//Compra
app.post("/services/buy", async (req, resp) => {
  try{
    const addChip = await sDAO.generateChip([req.body.msisdn, req.body.company, req.body.id_user]);
    resp.send(`Chip successfully generated!`)
   }
   catch(error){
     resp.send(error);
   }
})
}