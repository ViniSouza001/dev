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


<<<<<<< HEAD
-- TAREFA
-- A cliente Sara Luzia de Melo quer duas pizzas napolitanas
-- Registre esse pedido
-- DESAFIO: Criar um procedimento armazenado que recebe três parâmetros (cliente_id, pizza_id e quantidade)
-- e registre um pedido de um item calculando um total
DROP PROCEDURE IF EXISTS pedidoDeUmItem;

=======

-- DROP PROCEDURE IF EXISTS atualizaValorPedido;
-- CREATE PROCEDURE atualizaValorPedido(id int)
-- UPDATE pedidos
--     SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
--         WHERE pedido_id = id;

-- DESAFIO: crie um procedimento armazenado que receba três parâmetros (cliente_id
-- pizza_id e quantidade) e resgistre um pedido de um item calculando o total
-- pedidoItem(cli_id int, piz_id int, qnt int);
-- "Thamires de Campo Luz" quer uma pizza Vienense (96, 41, 1)
-- "Everton Jose de Souza" quer duas Toscana (105, 39, 2)
-- "Silvia Roberta de Jesus Garci" quer uma Canadense e 2 cubanas
DELIMITER $
DROP PROCEDURE IF EXISTS pedidoItem $
CREATE PROCEDURE pedidoItem(cli_id INT, piz_id INT, qtd INT)
BEGIN
    SELECT c.nome, p.nome, SUM(p.valor * qtd) AS total
    FROM clientes c, pizzas p
    WHERE c.cliente_id = cli_id AND p.pizza_id = piz_id;
END $
DELIMITER ;
CALL pedidoItem(105, 39, 2);
>>>>>>> 73dfe0b8e9724d26229f88acb4ef49fd53b747f9

SELECT * FROM pizzas WHERE nome = 'Napolitana';
-- cliente_id: 91;
-- preco_pizza: 33.41
INSERT INTO pedidos VALUES (null, 91, CURDATE(), NOW(), 33.41);
