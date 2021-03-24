CREATE TABLE USERS (
ID_USER INT NOT NULL AUTO_INCREMENT,
FULLNAME VARCHAR(100),
EMAIL VARCHAR(45) NOT NULL UNIQUE,
CPF CHAR(11),
CNPJ CHAR(14),
`PASSWORD` VARCHAR(100),
PRIMARY KEY (ID_USER)
);

CREATE TABLE CARDS (
ID_CARD INT NOT NULL AUTO_INCREMENT,
`TYPE` VARCHAR(10),
BRAND varchar(10),
`NUMBER` INT NOT NULL,
HOLDER VARCHAR (50),
EXPIRATIONDATE CHAR(4),
ID_USER INT,
PRIMARY KEY (ID_CARD),
FOREIGN KEY(ID_USER) REFERENCES USERS(ID_USER)
);

CREATE TABLE SALES(
ID_SALES INT NOT NULL,
`DATE`TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRODUCT VARCHAR(45),
MSISDN BIGINT,
AMOUNT INT,
ID_USER INT,
ID_CARD INT,
PRIMARY KEY(ID_SALES),
FOREIGN KEY(ID_USER) REFERENCES USERS (ID_USER),
FOREIGN KEY (ID_CARD) REFERENCES CARDS(ID_CARD)

);

CREATE TABLE CHIPS(
MSISDN BIGINT NOT NULL PRIMARY KEY,
COMPANY VARCHAR (45),
ID_USER INT,
PRIMARY KEY (MSISDN),
FOREIGN KEY (ID_USER) REFERENCES USERS(ID_USER)
);

SELECT * FROM USERS;
SELECT * FROM CARDS;
SELECT * FROM CHIPS;
SELECT * FROM SALES;