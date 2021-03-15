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


}