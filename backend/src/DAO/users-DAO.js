module.exports = class usersDAO{

    constructor(bd){
        this.bd = bd
    }

    showUsers(){
        return new Promise ((resolve, reject) =>
        {
            this.bd.all("SELECT * FROM USERS", (error, rows) =>{
                if (error) reject("Erro ao listar usuários")
                else resolve(rows)
            })
        })
    }


    getUserByEmailInDB(email){
        return (new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM user WHERE email = ?`, [email], (err, rows) =>{
                if(err) reject(err)
                else resolve(rows)  
            })
        }
                
        ))
    }

    createUser(name, email, cpf, phone, user_id){
        return ( new Promise((resolve, reject) =>{
            this.bd.run(`INSERT INTO USERS (NAME, EMAIL, CPF, PHONE, USER_ID) VALUES (?,?,?,?,?)`, [name, email, cpf, phone, user_id], (error) =>{
                if (error) reject (error +". Please try again.") 
                else resolve ("Register completed successfully!")})
            })
        )
    }

}