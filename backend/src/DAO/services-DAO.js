const con = require('../infra/mysql-connection')

module.exports = class servicesDAO{


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
            });
        });
    };

    showSales(sales){
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM SALES', sales, (error, rows)=>{
                if(error){reject(error)}
                else{resolve (rows)}
            });
        });
    };

    getHistoryByUser(historyPurchase){
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM SALES WHERE ID_USER=?', historyPurchase, (error, rows)=>{
                if(error){reject(error)}
                else{resolve (rows)}
            });
        });
    };

    delHistoryById(deleteHistory){
        return new Promise((resolve, reject)=>{
            con.query('DELETE * FROM SALES WHERE ID_USER=?', deleteHistory, (error, rows)=>{
                if(error){reject(error)}
                else{resolve(rows)}
            });
        });
    };



}