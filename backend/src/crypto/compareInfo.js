const bcrypt = require('bcrypt')

const comparePassword = (senha, row) => {   
  
    bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
        if (err) {
          throw err}
        else if (!isMatch) {
          reject('Senha e Login não válidos')} 
        else {
          resolve(row)}
      })

    
}

module.exports = comparePassword