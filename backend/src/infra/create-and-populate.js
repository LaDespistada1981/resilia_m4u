/*
Arquivo de execução única para criação e população do banco
*/

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database.db');

// //====== Users

// const USERS_SCHEMA = `

//   CREATE TABLE IF NOT EXISTS 'USERS' (
//     'ID_USER' INTEGER PRIMARY KEY AUTOINCREMENT,
//     'NOME' varchar(64),
//     'CPF' char(11),
//     'EMAIL' varchar(64),
//     'SENHA' varchar(100)
//   );`;

//   const ADD_USERS_DATA = `
  
//     INSERT INTO USERS (NOME, CPF, EMAIL, SENHA)
//     VALUES
//       ('Marcella Justo', '12345678910', 'justoamarcella@gmail.com', 'vailavai123'),
//       ('Caroline Noronha', '10987654321', 'carolnt@gmail.com', 'grafenoepao')

//   `

// function criaTabelaUser(){
//   db.run(USERS_SCHEMA, (error)=>{
//     if (error) console.log("Erro ao criar tabela users");
//   });
// }

// function populaTabelaUser(){
//   db.run(ADD_USERS_DATA, (error)=>{
//     if (error) console.log("Erro ao popular tabela users");
//   });
// }

// //======= Cartoes

// const CARDS_SCHEMA = `

//   CREATE TABLE IF NOT EXISTS CARDS (
//     'ID_CARDS' INTEGER PRIMARY KEY AUTOINCREMENT,
//     'NUMBER' VARCHAR(10),
//     'NICKNAME' VARCHAR(25),
//     'EXPIRATION' DATE,
//     'ID_USERS' INTEGER,
//     FOREIGN KEY (ID_USERS) REFERENCES USERID(ID)
//   );`;

// const ADD_CARDS_DATA = `
  
//   INSERT INTO CARDS (NUMBER, NICKNAME, EXPIRATION, ID_USERS)
//   VALUES
//     ('1234********4321', 'itaú', 24-11, 1),
//     ('1234********4223', 'NuConta', 24-12, 1),
//     ('1334********4221', 'itaú', 24-11, 2)
// `

// function criaTabelaCards(){
//   db.run(CARDS_SCHEMA, (error)=>{
//     if(error) console.log("Erro ao criar tabela Cards");
//   });
// }

// function populaTabelaCards(){
//   db.run(ADD_CARDS_DATA, (error)=>{
//     if (error) console.log("Erro ao popular tabela Cards");
//   });
// }

// /*     Histórico
// criar e popular tabela histórico
// */

// db.serialize(()=>{
//   criaTabelaUser();
//   populaTabelaUser();
//   criaTabelaCards();
//   populaTabelaCards();

// });


