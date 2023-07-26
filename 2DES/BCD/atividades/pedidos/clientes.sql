drop database if exists loja;
create database loja;
use loja;

CREATE TABLE Clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(50),
    cidade VARCHAR(50)
);

CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);

CREATE TABLE Produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(50),
    preco DECIMAL(8, 2)
);


-- crie uma view que retorne o nome do cliente, o nome do produto e o valor total do pedido para cada cliente