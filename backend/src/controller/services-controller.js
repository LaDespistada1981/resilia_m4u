const servicesDAO = require('../DAO/services-DAO')

module.exports = (app, bd) => {

    const sDAO = new servicesDAO(bd)

//Recarga

app.post("/services/recharge", (req, resp) => {
  console.log("Vai uma recarga aí, filha?");
});

//Compra
app.post("/services/buy", (req, resp) => {
  console.log("Vai um chip aí, filha?");
})

}