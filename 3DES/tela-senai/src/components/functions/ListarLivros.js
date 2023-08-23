import React from 'react'
import livroImg from '../../assets/livro.jpg'

function ListarLivros({ livro }) {

    return (
        <div className='card'>
            <img src={livroImg} className='imgLivro alignCenter' />
            <h3 className='alignCenter'>{livro.nome}</h3>
            <p>Ano de lançamento: {livro.ano}</p>
            <p>{livro.materia}: JavaScript / Node.JS</p>
            <div className='resumo'>"O livro 'Clean Code: A Handbook of Agile Software Craftsmanship' de Robert C. Martin é uma leitura
                fundamental para programadores. Ele ensina como escrever código de qualidade, fácil de entender e manter.
                Com exemplos práticos, o autor aborda técnicas para melhorar a legibilidade e estrutura do código,
                abrangendo desde a escolha de nomes adequados para variáveis até a organização de funções e classes.
                'Clean Code' é essencial para desenvolvedores que desejam aprimorar suas habilidades e contribuir para projetos
                de software mais profissionais e eficazes."</div>
            <strong className='alignCenter preco'>{livro.preco}</strong>
        </div>
    )
}

export default ListarLivros