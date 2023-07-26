DROP DATABASE IF EXISTS bonificacoes;
CREATE DATABASE bonificacoes;
USE bonificacoes;

CREATE TABLE funcionario(
    matricula VARCHAR(10) NOT NULL PRIMARY KEY,
    nome_completo VARCHAR(50) NOT NULL,
    data_admissao DATE NOT NULL,
    salario DECIMAL(7,2) NOT NULL,
<<<<<<< HEAD
    data_pagamento DATE DEFAULT CURDATE(),
    desempenho INT NOT NULL,
    bonificacao DECIMAL(10,2) AS ((salario * 0.02) * (YEAR(CURRENT_DATE()) - YEAR(data_admissao) - (DATE_FORMAT(CURRENT_DATE(), '%m%d') < DATE_FORMAT(data_admissao, '%m%d'))) * desempenho)
);

INSERT INTO funcionario values
("0001", "Jose Rodrigues", "2018/01/06", 1300.00, DEFAULT, 7, NULL),
("0002", "Maria Severo", "2018/03/04", 2200.00, DEFAULT, 10, NULL),
("0003", "Silvia Silva", "2019/05/20", 3200.00, DEFAULT, 10, NULL),
("0004", "Solange Oliveira", "2020/12/11", 5500.00, DEFAULT, 8.5, NULL),
("0005", "Mariana Pontes", "2021/12/13", 2350.00, DEFAULT, 6, NULL),
("0006", "Marcos Conde", "2020/04/17", 1000.00, DEFAULT, 10, NULL);

SELECT * FROM funcionario;

-- calculo da bonificacao
-- "YEAR(CURRENT_DATE()) - YEAR(data_admissao)" ele pega o ano atual e subtrai com o ano da admissao
-- "DATE_FORMAT(CURRENT_DATE(), '%m%d')" ele pega a data atual no formato (Mês e dia) e passa para string 
-- "< DATE_FORMAT(data_admissao, '%m%d)" faz a informação acima menos a data de admissão
-- se a data (mês e dia) de admissão for menor do que a data (mês e dia) atual, é diminuído 1 ano
-- por não ter completado 1 ano inteiro
=======
    data_pagamento DATE NOT NULL,
    desempenho INT
);
>>>>>>> d24cc1a9f9eb616ec8df8c5e06208ead08ab94d9
