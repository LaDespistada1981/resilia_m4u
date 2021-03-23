const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10);
const pwdToSave = bcrypt.hashSync(userPwd, salt);

// const comparePassword = (senha, row) => {   
  
//     bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
//         if (err) {
//           throw err}
//         else if (!isMatch) {
//           reject('Senha e Login não válidos')} 
//         else {
//           resolve(row)}
//       })

    
// }

module.exports = comparePassword