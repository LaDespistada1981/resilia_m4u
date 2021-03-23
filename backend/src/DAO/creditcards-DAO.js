const con = require('../infra/bd-mysql')

module.exports = class creditCardsDAO{

    constructor (bd){
        this.bd = bd
    }

    collectCreditCard(card){
        return new Promise((resolve, reject) =>{
            con.query(`INSERT INTO CARDS (TYPE, BRAND, NUMBER, HOLDER, EXPIRATIONDATE, ID_USER) VALUES (?,?,?,?,?,?)`, card, (error, rows) =>{
                if (error) reject (error +". Please try again.")
                else resolve (rows)
        })
    })
}

    deleteCreditCard(card){
        return new Promise ((resolve,reject) =>{
            con.query('DELETE FROM CARDS WHERE ID_CARD = ?', [card], (error) =>{
            if (error) reject ("Something went wrong. Please try again.")
            else resolve ("Credit card successfully deleted.")
        })
    })
}

    cardsPerUser(card){
        return new Promise ((resolve,reject) =>{
            con.query('SELECT * FROM CARDS WHERE ID_USER = ?', [card], (error,rows) =>{
            if (error) reject ("Something went wrong. Please try again.")
            else resolve (rows)
            })   
    })
    }

    creditCardsDatabase(){
        return new Promise ((resolve,reject) =>{
            con.query("SELECT * FROM CARDS", (error, rows) =>{
            if (error) reject ("Somethins went wrong. Please try again.")
            else resolve (rows)
            })
    })
    }

}