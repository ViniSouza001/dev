-- calcular a quantidade de pizzas de todos os pedidos de número 3
SELECT SUM(quantidade) from Itens_Pedido where pedido_id = 3;

-- seleciona todas as pizzas com os ID's dentro dos parênteses
select * from pizzas where pizza_id in (7, 5. 8, 9, 3, 10, 16);

-- Busca o nome do cliente que fez o pedido n° 3
select c.nome from pedidos p inner join clientes c
on c.cliente_id = p.cliente_id
where p.pedido_id = 3;

-- os nomes das pizzas dos pedidos n°3
SELECT p.nome from Itens_Pedido it inner join pizzas p
on it.pizza_id = p.pizza_id
where it.pedido_id = 3
order by p.pizza_id;