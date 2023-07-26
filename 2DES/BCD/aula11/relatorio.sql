-- Relatório de todos os dados dos pedidos, dados dos itens, nome do cliente e nome das pizzas.

select p.*, i.quantidade, i.valor AS preco, c.nome, pi.nome as pizza
from pedidos p inner join itens_pedido i
on p.pedido_id = i.pedido_id
left join clientes c
on p.cliente_id = c.cliente_id
left join pizzas pi
on i.pizza_id = pi.pizza_id;

-- criar uma visão e salvar
DROP VIEW IF EXISTS vw_pedidos_full;
CREATE VIEW vw_pedidos_full AS
SELECT p.*, i.pizza_id,i.quantidade, i.valor as preco, (i.valor * i.quantidade) as subtotal, c.nome, pi.nome as pizza
from pedidos p inner join itens_pedido i
on p.pedido_id = i.pedido_id
left join clientes c
on p.cliente_id = c.cliente_id
left join pizzas pi
on i.pizza_id = pi.pizza_id;

-- agrupe os pedidos e calcule o valor total
SELECT *, SUM(subtotal) AS Total FROM vw_pedidos_full GROUP BY pedido_id;

-- agrupar os pedidos e contar quantas pizzas cada pedido possui
SELECT *, SUM(quantidade) as total_pizzas FROM vw_pedidos_full GROUP BY pedido_id;