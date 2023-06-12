drop database if exists usuarios;
create database usuarios;
use usuarios;

create table users (
	id int not null primary key auto_increment,
	cpf varchar(50) not null,
	nome varchar(100) not null,
	email varchar(100) not null,
	senha varchar(50) not null,
	nasto date not null
);

create table enderecos (
	user_id int not null,
	cep varchar(20) not null,
	numero varchar(10),
	complemento varchar(50),
	foreign key (user_id) references users(id)
);

create table telefones (
	user_id int not null,
	telefone varchar(100) not null,
	foreign key (user_id) references users(id)
);

insert into users VALUES
(default, '111.222.333/45', 'Jurandyr da Silva', 'teste1@gmail.com', password('senha123'), '2005-07-13'),
(default, '999.888.777/65', 'Rodrigues Oliveira', 'teste2@gmail.com', password('senha321'), '1958-05-12'),
(default, '444.555.666/78', 'Roseane Josimara', 'teste3@gmail.com', password('senha1010'), '1973-12-25');

insert into enderecos VALUES
(1, "19320-000", '23', "Condominio"),
(2, "13920-456", '9', null),
(3, "13922-364", 'A3', "Bloco 5");

insert into telefones VALUES
(1, '19 99245-4968, 19 99874-5324'),
(2, '15 99324-7890'),
(3, '19 99932-6348, 19 98954-5248, 19 99520-3047');

select * from users;

CREATE VIEW listarInfo AS
SELECT u.*, t.telefone, e.cep, e.numero, e.complemento
from users u
join telefones t on t.user_id = u.id
join enderecos e on e.user_id = u.id
where u.id = 2;

SELECT telefone FROM telefones WHERE user_id = 3;

select * from listarInfo;