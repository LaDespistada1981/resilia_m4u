const con = require('../infra/bd-mysql')

module.exports = class servicesDAO{

    constructor(bd){
        this.bd = bd
    }


    generateChip(phone){
        return new Promise ((resolve, reject) =>{
            con.query(`INSERT INTO CHIPS (MSISDN, COMPANY, ID_USER) VALUES (?,?,?)`,  phone, (error, rows) =>{
                    if (error) {reject (error)}
                    else {resolve ("Number successfully generated")}
            })
        })
    }



}