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
    };
    
    
    generateSale(sale){
        return new Promise((resolve, reject)=>{
            con.query(`INSERT INTO SALES (DATE, PRODUCT, MSISDN, AMOUNT, ID_USER, ID_CARD) VALUES (?, ?, ?, ?, ?, ?)`, sale, (error, rows)=>{
                if(error) {reject(error)}
                else {resolve("Sale susccessfully generated")}
            })
        })
    };

    showSales(sales){
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM SALES', sales, (error, rows)=>{
                if(error){reject(error)}
                else{resolve (rows)}
            })
        })
    }



}