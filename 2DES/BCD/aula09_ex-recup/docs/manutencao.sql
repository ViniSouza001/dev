DROP DATABASE IF EXISTS manutencao;
CREATE DATABASE manutencao;
USE manutencao;

CREATE TABLE funcionarios(
    matricula INT NOT NULL PRIMARY KEY,
    funcionario VARCHAR(150) NOT NULL
);

CREATE TABLE telefones (
    matricula INT NOT NULL,
    FOREIGN KEY(matricula) REFERENCES funcionarios(matricula),
    telefone VARCHAR(150) NOT NULL
);

CREATE TABLE veiculos (
    placa VARCHAR(30) NOT NULL PRIMARY KEY,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE manutencao(
    id_manutencao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(30) NOT NULL,
    matricula INT NOT NULL,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE,
    descricao VARCHAR(150) NOT NULL,
    FOREIGN KEY(placa) REFERENCES veiculos(placa),
    FOREIGN KEY (matricula) REFERENCES funcionarios(matricula)
);

LOAD DATA INFILE 'E:/senai/2DES/BCD/aula09/csv/funcionarios.CSV'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/senai/2DES/BCD/aula09/csv/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/senai/2DES/BCD/aula09/csv/veiculos.CSV'
INTO TABLE veiculos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/senai/2DES/BCD/aula09/csv/manutencao.CSV'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

