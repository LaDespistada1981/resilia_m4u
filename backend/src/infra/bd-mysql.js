const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fone'
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})



// process.on('SIGINT', () =>
// 	con.close(() => {
// 		console.log('DB finished');
// 		process.exit(0);
// 	})
// );

module.exports = con;