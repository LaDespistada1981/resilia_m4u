/*
Arquivo de execução única para criação e população do banco
*/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//====== Users

const USERS_SCHEMA = `

  CREATE TABLE IF NOT EXISTS 'USERS' (
    'ID_USER' INTEGER PRIMARY KEY AUTOINCREMENT,
    'NOME' varchar(64),
    'CPF' char(11),
    'EMAIL' varchar(64),
    'SENHA' varchar(100)
  );`;

  const ADD_USERS_DATA = `
  
    INSERT INTO USERS (ID_USER, NOME, CPF, EMAIL, SENHA)
    VALUES
      ('Marcella Justo', '12345678910', 'justoamarcella@gmail.com', 'vailavai123'),
      ('Caroline Noronha', '10987654321', 'carolnt@gmail.com', 'gostosapracaramba')

  `

function criaTabelaUser(){
  db.run(USERS_SCHEMA, (error)=>{
    if (error) console.log("Erro ao criar tabela users");
  });
}

function populaTabelaUser(){
  db.run(ADD_USERS_DATA, (error)=>{
    if (error) console.log("Erro ao popular tabela users");
  });
}

//======= Cartoes

const CARDS_SCHEMA = `

CREATE TABLE IF NOT EXISTS CARDS (
  'ID_CARDS' INTEGER PRIMARY KEY AUTOINCREMENT,
  'NUMBER' VARCHAR(10),
  'NICKNAME' VARCHAR(25),
  'EXPIRATION' DATE,
  'ID_USERS' INTEGER,
  FOREIGN KEY (ID_USERS) REFERENCES USERID(ID)
);`;
