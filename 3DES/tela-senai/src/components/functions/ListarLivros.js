import React from 'react'
import { useEffect, useState } from 'react'
import livroImg from '../../assets/livro.jpg'

function ListarLivros() {

    const [livros, setLivros] = useState([])

    const url = 'http://localhost:8081/'

    useEffect(() => {
        fetch(url + 'livros', { method: "GET" })
            .then(resp => resp.json())
            .then((data) => {
                setLivros(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            {
                livros.map((livro, i) => (
                    <div className='card' key={`div ` + i}>
                        <h3 className='alignCenter' key={`h3 ` + i}> {livro.nome}</h3>
                        <img src={livroImg} key={`img ` + i} className='imgLivro alignCenter' />
                        <p>Genre: {livro.genero}</p>
                        <p>Author: {livro.autor}</p>
                        <p>Publication year: {livro.anoPublicacao}</p>
                        <p className='info'>Summary: {livro.resumo}</p>
                        <p className='preco'>Price: R${(livro.preco).toFixed(2)}</p>
                        <button className='black'>Buy</button>
                    </div>
                ))
            }
        </>
    )
}

export default ListarLivros