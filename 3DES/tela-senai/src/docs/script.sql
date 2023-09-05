drop database if exists biblioteca;

create database biblioteca;
use biblioteca;

create table livros (
    id int not null primary key AUTO_INCREMENT,
    nome VARCHAR(50) not null,
    genero varchar(50),
    autor varchar(100) not null,
    anoPublicacao varchar(4) not null,
    resumo varchar(100),
    preco decimal(4, 2) not null
);

insert into livros values 
(null, "Clean Code", "Computer Science", "Robert Cecil Martin", "2000", "It teaches how to write high-quality, understandable, and maintainable code. With practical examples, the book covers techniques to improve code readability and structure, ranging from choosing appropriate variable names to organizing functions and classes.", 10.00),
(null, "Fundamentos Matemáticos para a ciência da computação", "Computer Science", "Judith L. Gersting", "2010", "", 15.00),
(null, "The Alchemist", "Fiction", "1988", "Follow the journey of a young shepherd named Santiago as he sets out to discover his personal legend and find his true purpose in life", 30.00),
(null, "Sapiens: A Brief History of Humankind", "Non-Fiction", "2011", "Explore the fascinating history of Hommo sapiens and how oue species has envolved and shaped the world we live in today", 60.00),
(null, "The Harry Potter Series", "Fantasy", "")
