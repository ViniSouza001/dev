drop database if exists concessionaria;

create database concessionaria;
use concessionaria;

create table automoveis (
    id int not null primary key AUTO_INCREMENT,
    modelo varchar(50) not null,
    preco decimal(7, 2) not null
);

create table clientes (
    id int not null primary key AUTO_INCREMENT,
    nome varchar(200) not null
);

create table concessionarias (
    id int not null primary key AUTO_INCREMENT,
    concessionaria varchar(50) not null
);

create table alocacao (
    id int not null primary key AUTO_INCREMENT,
    area int not null,
    automovelId int not null,
    concessionariaId int not null,
    quantidade int not null,
    foreign key (automovelId) references automoveis(id),
    foreign key (concessionariaId) references concessionarias(id)
);

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/Concessionaria/docs/csv/automoveis.CSV'
into table automoveis
fields terminated by ';'
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/Concessionaria/docs/csv/clientes.CSV'
into table clientes
fields terminated by ';'
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/Concessionaria/docs/csv/concessionaria.CSV'
into table concessionarias
FIELDS TERMINATED BY ';'
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/Concessionaria/docs/csv/alocacao.CSV'
into table alocacao
fields terminated by ';'
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;
