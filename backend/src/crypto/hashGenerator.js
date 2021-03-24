const bcrypt = require('bcrypt');

const hashGenerator = (info) =>{
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds)
    const crypt = bcrypt.hashSync(info, salt) 
    return crypt
 }
module.exports = hashGenerator





