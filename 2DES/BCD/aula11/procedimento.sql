-- O cliente Walter Paulo Costenaro quer 1 pizza de atum e 2 napolitanas
SELECT * FROM clientes WHERE nome LIKE "Walter paulo%";
SELECT * FROM pizzas WHERE nome = 'atum';
-- cliente_id: 98,
-- preco_pizza: 32.29
-- INSERT INTO pedidos VALUES (null,(SELECT cliente_id FROM clientes WHERE nome LIKE "Walter Paulo%"), CURDATE(), NOW(), (SELECT valor FROM pizzas WHERE nome = "Atum"));
INSERT INTO pedidos VALUES (null, 98, CURDATE(), NOW(), 32.29);
INSERT INTO itens_pedido VALUES (27, (SELECT pizza_id FROM pizzas WHERE nome = "Atum"), 1, (SELECT valor FROM pizzas WHERE pizza_id = 5));
INSERT INTO itens_pedido VALUES (27, (SELECT pizza_id FROM pizzas WHERE nome = "Napolitana"), 2, (SELECT valor FROM pizzas WHERE nome = "Atum"));
SELECT * FROM pedidos;

-- calcular o valor do pedido
SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;

-- alterar a tabela pedidos (adicionar um campo que irá calcular o valor) onde o pedido_id for 27
UPDATE pedidos
    SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id =27)
    WHERE pedido_id = 27;
SELECT * FROM pedidos WHERE pedido_id = 27;

-- criar um PROCEDURE que calcule o valor total do pedido
DELIMITER $
CREATE PROCEDURE atualizaValorPedido(id int)
    BEGIN
        UPDATE pedidos
            SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
        WHERE pedido_id = id;

    END $
DELIMITER ;

-- excluir e criar novamente a mesa PROCEDURE sem alterar os delimitadores
DROP PROCEDURE IF EXISTS atualizaValorPedido;
CREATE PROCEDURE atualizaValorPedido(id int)
UPDATE pedidos
    SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
        WHERE pedido_id = id;

-- Testando...
SELECT * FROM pedidos WHERE pedido_id = 27;

-- alterar o valor para nulo
UPDATE pedidos SET valor = NULL WHERE pedido_id = 27;

-- utilizar o procedimento para alterar
CALL atualizaValorPedido(27);
SELECT * FROM pedidos WHERE pedido_id = 27;


-- TAREFA
-- A cliente Sara Luzia de Melo quer duas pizzas napolitanas
-- Registre esse pedido
-- DESAFIO: Criar um procedimento armazenado que recebe três parâmetros (cliente_id, pizza_id e quantidade)
-- e registre um pedido de um item calculando um total
DROP PROCEDURE IF EXISTS pedidoDeUmItem;


SELECT * FROM pizzas WHERE nome = 'Napolitana';
-- cliente_id: 91;
-- preco_pizza: 33.41
INSERT INTO pedidos VALUES (null, 91, CURDATE(), NOW(), 33.41);
