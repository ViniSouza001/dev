use fabrica;

-- 

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/correcao_saep2022/docs/csv/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/correcao_saep2022/docs/csv/automoveis.csv'
INTO TABLE automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/correcao_saep2022/docs/csv/concessionarias.csv'
INTO TABLE concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Documents/GitHub/dev/3DES/correcao_saep2022/docs/csv/alocacao.csv'
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;