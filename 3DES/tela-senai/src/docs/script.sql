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
(null, "Fundamentos Matemáticos para a ciência da computação", "Computer Science", "Judith L. Gersting", "2010", "Este livro irá te auxiliar nas matérias de eletroeletrônica e em todos os seus componentes", 15.00),
(null, "The Alchemist", "Fiction", "2000", "O livro 'Clean Code: A Handbook of Agile Software Craftsmanship' de Robert C. Martin é uma leitura fundamental para programadores. Ele ensina como escrever código de qualidade, fácil de entender e manter. Com exemplos práticos, o autor aborda técnicas para melhorar a legibilidade e estrutura do código, abrangendo desde a escolha de nomes adequados para variáveis até a organização de funções e classes. 'Clean Code' é essencial para desenvolvedores que desejam aprimorar suas habilidades e contribuir para projetos de software mais profissionais e eficazes.", 10.00),
(null, "Electro-Eletrônica", "Eletroeletrônica", "2010", "Este livro irá te auxiliar nas matérias de eletroeletrônica e em todos os seus componentes", 15.00);
