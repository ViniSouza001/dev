DROP DATABASE IF EXISTS restaurante;

CREATE DATABASE restaurante;
USE restaurante;

CREATE TABLE cliente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE categoria (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    categoriaId INT NOT NULL,
    endereco VARCHAR(100) NOT NULL
);

CREATE TABLE cardapio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restauranteId INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(6,2) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurante(id)
);

CREATE TABLE avaliacao (
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota decimal(2,1) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    FOREIGN KEY(restauranteId) REFERENCES restaurante(id),
    FOREIGN KEY(clienteId) REFERENCES cliente(id)
);

INSERT INTO cliente VALUES
(default, "Jose Mario", "(11) 5555-1234","usuario1@teste.com", "senha123"),
(default, "Hernando Henrique", "(21) 5555-5678", "usuario2@teste.com", "senha456"),
(default, "Flávia Belarmini", "(47) 5555-9012", "usuario3@teste.com", "senha789"),
(default, "Joao Arnaldo", "(83) 5555-3456", "usuario4@teste.com", "senhaabc"),
(default, "Maria Helena", "(92) 5555-7890", "usuario5@teste.com", "senhadef"),
(default, "Fabio Mostarda", "(16) 5555-2345", "usuario6@teste.com", "senha1234"),
(default, "Felipe Geraldo", "(75) 5555-6789", "usuario7@teste.com", "senha5678"),
(default, "Gustavo PNG", "(81) 5555-0123", "usuario8@teste.com", "senha90ab"),
(default, "Samuel JPG", "(54) 5555-4567", "usuario9@teste.com", "senhacdef"),
(default, "Vinicius EXE", "(27) 5555-8901", "usuario10@teste.com", "senhaghi");

insert into categoria VALUES
(null, "Pizzaria"),
(null, "Lanchonete"),
(null, "Churrascaria"),
(null, "Doceria"),
(null, "Cafeteria"),
(null, "Fast food"),
(null, "Hamburgueria"),
(null, "Trattoria"),
(null, "Comida caseira");

INSERT INTO restaurante VALUES 
(default, "Vinicios Restaurant", 1, "Rua do beco, 120"),
(default, "Restaurante do suvaco", 3, "beco da rua, 45"),
(default, "Comida sem sal", 9, "Rua sem asfalto, 19"),
(default, "So tem batata frita", 2, "Rua das pedras, 0"),
(default, "Sem talheres", 8, "Pedras da rua, 100");

insert into avaliacao values 
(1, 2, "2023/04/13", 6.9, "Restaurante regular"),
(2, 1, "2023/02/10", 8.8, "Otimo restaurante"),
(3, 8, "2022/05/03", 4, "Pessimo restaurante"),
(4, 9, "2023/01/24", 2, "Sem palavras..."),
(5, 10, "2022/10/30", 10, "Mamma mia");

INSERT INTO cardapio VALUES
(null, 1, "Pizza de calabresa", 30.0),
(null, 2, "Rodizio", 60),
(null, 2, "Kilo biff", 44.90),
(null, 3, "Self Service", 55.40),
(null, 4, "X-salada", 16.50),
(null, 5, "Prato macarronada", 35.9);

CREATE VIEW vw_restaurante AS
SELECT r.id, r.nome AS restaurante, cat.nome AS categoria, a.nota AS nota
FROM restaurante r
INNER JOIN categoria cat ON r.categoriaId = cat.id
LEFT JOIN avaliacao a ON r.id = a.restauranteId
GROUP BY r.id, cat.id;

SELECT r.nome AS restaurante, r.endereco, a.nota AS avaliacao,
GROUP_CONCAT(c.descricao SEPARATOR ', ') AS cardapio, a.descricao
FROM restaurante r
LEFT JOIN avaliacao a ON  a.restauranteId = r.id
LEFT JOIN cardapio c ON c.restauranteId = r.id
WHERE r.id = 2;

SELECT r.nome AS restaurante_nome, r.endereco, a.nota AS nota_media, GROUP_CONCAT(c.descricao SEPARATOR ', ') AS cardapio, a.descricao AS avaliacao
FROM restaurante r
LEFT JOIN cardapio c ON r.id = c.restauranteId
LEFT JOIN avaliacao a ON r.id = a.restauranteId
WHERE r.id = 2;