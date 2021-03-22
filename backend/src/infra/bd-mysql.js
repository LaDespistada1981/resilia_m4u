const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Firemanball5@',
    database: 'fone'
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

// con.end((err) => {
//     if(err) {
//         console.log('Erro to finish connection...', err)
//         return 
//     }
//     console.log('The connection was finish...')
// })

// process.on('SIGINT', () =>
// 	con.close(() => {
// 		console.log('DB finished');
// 		process.exit(0);
// 	})
// );

module.exports = con;