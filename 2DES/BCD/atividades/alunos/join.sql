DROP DATABASE IF EXISTS alunos;
CREATE DATABASE alunos;
USE alunos;

CREATE TABLE alunos (
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50),
    curso_id INT
);

CREATE TABLE cursos (
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50)
);

create table notas (
    id int not null primary key auto_increment,
    aluno_id int not null,
    disciplina_id int not null,
    nota float
);

create table disciplinas (
    id int primary key auto_increment,
    nome varchar(100)
);

insert into alunos values
-- (id, nome, curso_id)
(default, "Vinicius", 1),
(default, "Gustavo", 2),
(default, "Andre", 3),
(default, "Larissa", 4),
(default, "Camacho", 5);

insert into cursos values
-- (id, nome_curso)
(default, "Programacao"),
(default, "Mecatronica"),
(default, "Eletronica"),
(default, "Administracao"),
(default, "EAD"),
(default, "Mecanico de bombas");

insert into disciplinas values
-- (id, nome_disciplina)
(default, "Front-end"),
(default, "Banco de dados"),
(default, "Back-end"),
(default, "Mobile"),
(default, "POO");

insert into notas values
-- (id, aluno_id, disciplina_id, nota)
(default, 1, 2, 8.7),
(default, 2, 1, 10),
(default, 4, 4, 8.5),
(default, 3, 3, 9),
(default, 5, 5, 9.5);

-- criar uma visão que mostra o nome do aluno e o curso que está fazendo
DROP VIEW IF EXISTS alunos_cursos;
CREATE VIEW alunos_cursos as
select a.nome as alunos, c.nome
from alunos a
join cursos c on c.id = a.curso_id;
select * from alunos_cursos;

-- criar uma visão que mostre o nome do aluno, o nome do curso, o nome da disciplina e a média das respectivas notas
DROP VIEW IF EXISTS consulta_notas;
create view if not exists consulta_notas as 
select a.nome as aluno, c.nome as curso, disc.nome as disciplina, AVG(n.nota) as media
from notas n
join alunos a on n.aluno_id = a.id
join disciplinas disc on disc.id = n.disciplina_id
join cursos c on a.curso_id = c.id
group by n.nota desc;
select * from consulta_notas;
