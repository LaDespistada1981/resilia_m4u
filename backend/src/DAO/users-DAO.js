const con = require('../infra/bd-mysql');

module.exports = class usersDAO{

    constructor(bd){
        this.bd = bd
    }

    showUsers(){
        return new Promise ((resolve, reject) =>
        {
            // this.bd.all("SELECT * FROM USERS", (error, rows) =>{
            //     if (error) reject("Erro ao listar usuários")
            //     else resolve(rows)
            // })
            con.query('SELECT * FROM USERS', (err, rows)=>{
                if(err) reject(err)
                else resolve(rows)
            })
        })
    }


    getUserByEmail(email){
        return (new Promise((resolve, reject) => {
            con.query('SELECT * FROM USERS WHERE EMAIL = ?', email, (err, rows) =>{
                if(err) reject(err)
                else resolve(rows)  
            })
        }
                
        ))
    }

    createUser(usuario){
    
        return new Promise((resolve, reject) =>{
            con.query(`INSERT INTO USERS (FULLNAME, EMAIL, CPF, CNPJ, PASSWORD) VALUES (?,?,?,?,?)`, usuario, (error, rows) =>{
                if (error){ reject (error +". Please try again.") }
                else {resolve (rows)}
            })
            })

    }

}