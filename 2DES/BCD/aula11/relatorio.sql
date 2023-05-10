-- Relatório de todos os dados dos pedidos, dados dos itens, nome do cliente e nome das pizzas.

select p.*, i.*, c.nome, pi.nome as pizza
from pedidos p inner join itens_pedido i
on p.pedido_id = i.pedido_id
left join clientes c
on p.cliente_id = c.cliente_id
left join pizzas pi
on i.pizza_id = pi.pizza_id;