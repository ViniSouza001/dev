-- Faça uma query que mostre o nome do funcionário que mais fez solicitações (em Reais), 
-- O SELECT deve mostrar o nome do funcionário e seu respectivo valor total

SELECT f.Nome_Func AS Funcionario, SUM(ISol.valor) AS Valor_Total
from Funcionarios f
JOIN Solicitacoes s ON f.Cod_Func = s.Cod_Func
JOIN Itens_Solicitacao ISol ON s.Num_Sol = ISol.Num_Sol
GROUP BY f.Nome_Func
ORDER BY Valor_Total DESC;

-- Faça uma consulta que mostre os nomes dos departamentos e nomes dos produtos
-- cujo as solicitações contém "Parafuso" e "Difusor"
SELECT D.Nome_Depto, P.Nome_produto
FROM Departamentos D
INNER JOIN Solicitacoes S ON D.Cod_Depto = S.Cod_Depto
INNER JOIN Itens_Solicitacao ISol ON S.Num_Sol = ISol.Num_Sol
INNER JOIN Produtos P ON ISol.Cod_Produto = P.Cod_Produto
WHERE P.Nome_produto IN ('Parafuso', 'Difusor')
GROUP BY  P.Nome_produto, D.Nome_Depto;

-- Crie uma view(visão) que mostre os seguintes campos: 
-- Num_Sol, Data_sol, Cod_Depto, Nome_Depto , Cod_Func, Nome_Func, Cod_Produto, 
-- Nome_produto, Qtde, valor e ordene por num_sol decrescente;
CREATE VIEW View_Solicitacoes AS
SELECT s.Num_Sol, s.Data_sol, s.Cod_Depto, d.Nome_Depto, s.Cod_Func, f.Nome_Func, i.Cod_Produto, p.Nome_produto, i.Qtde, i.Valor
FROM Solicitacoes s
JOIN Departamentos d ON s.Cod_Depto = d.Cod_Depto
JOIN Funcionarios f ON s.Cod_Func = f.Cod_Func
JOIN Itens_Solicitacao i ON s.Num_Sol = i.Num_Sol
JOIN Produtos p ON i.Cod_Produto = p.Cod_Produto
ORDER BY s.Num_Sol DESC;

SELECT * FROM View_Solicitacoes;

-- crie um procedimento armazenado chamado solicita_um_item
DROP PROCEDURE IF EXISTS solicitar_item;
DELIMITER $
CREATE PROCEDURE solicitar_item(
    IN n_sol NUMERIC(4),
    IN depto NUMERIC(4),
    IN func NUMERIC(4),
    IN prod NUMERIC(4),
    IN qtd NUMERIC(4),
    IN total NUMERIC(12,2)
)
BEGIN
    -- Cadastrar a solicitação
    INSERT INTO Solicitacoes(Num_Sol, Data_sol, Cod_Depto, Cod_Func)
    VALUES (n_sol, CURDATE(), depto, func);
    
    -- Cadastrar o item da solicitação
    INSERT INTO Itens_Solicitacao(Num_Sol, Cod_Produto, Qtde, Valor)
    VALUES (n_sol, prod, qtd, total);
END$
DELIMITER ;
CALL solicita_um_item(1041, 2000, 100, 145, 3, 255.00);