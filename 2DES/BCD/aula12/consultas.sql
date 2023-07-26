-- 1. Consulta que mostra apenas as vendas da vendedora "Maria";
SELECT * FROM venda WHERE id_vendedor = 2;

-- 2. Crie uma consulta que mostre todas as compras do cliente "Marcelo";
SELECT * FROM venda WHERE id_cliente = 4;

-- 3. Crie um relatorio que mostre todas as vendas com os seguintes campos: 
-- id da venda, nome do vendedor, nome do cliente, data e valor em ordem de data decrescente; 
-- Salve com o nome de vw_vendas_gerais; OBS: vendas em que id_vendedor ou id_cliente 
-- sejão nulos não devem aparecer;