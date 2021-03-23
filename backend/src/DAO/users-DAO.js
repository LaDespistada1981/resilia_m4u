const con = require('../infra/bd-mysql');

module.exports = class usersDAO{

    constructor(bd){
        this.bd = bd
    }

    showUsers(){
        return new Promise ((resolve, reject) =>
        {
            con.query('SELECT * FROM USERS', (err, rows)=>{
                if(err) reject(err)
                else resolve(rows)
            });
        });
    };


    getUserByEmail(email){
        return (new Promise((resolve, reject) => {
            con.query('SELECT * FROM USERS WHERE EMAIL = ?', email, (err, rows) =>{
                if(err) reject(err)
                else resolve(rows)  
            });
        }));
    };

    createUser(usuario){
        return new Promise((resolve, reject) =>{
            con.query(`INSERT INTO USERS (FULLNAME, EMAIL, CPF, CNPJ, PASSWORD) VALUES (?,?,?,?,?)`, usuario, (error, rows) =>{
                if (error){
                    reject (error +". Please try again.")
                }else {
                    resolve (rows)
                }
            });
            });
    };

    updateUser(usrAtualizado){
        return new Promise((resolve, reject)=>{
            let queryUpdate = "UPDATE USERS SET FULLNAME=?, EMAIL=? WHERE EMAIL=?"
            con.query(queryUpdate, usrUpdated, (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    };

    //Recuperação de Senha

    updatePwd(password){
        return new Promise((resolve, reject)=>{
            con.query('UPDATE USERS SET PASSWORD=? WHERE EMAIL=?', password, (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    delUser(usuario){
        return new Promise((resolve, reject)=>{
            con.query('DELETE FROM USERS WHERE EMAIL=?', usuario, (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }

};