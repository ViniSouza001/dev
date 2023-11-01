import ListarLivros from "./functions/ListarLivros"
import { useEffect, useState } from "react"

function Main() {

    // const [livros, setLivros] = useState([])
    // useEffect(() => {
    //     const livrosArray = []
    //     for (let i = 0; i < 10; i++) {
    //         livrosArray.push({
    //             id: i,
    //             nome: `Livro ${i + 1}`,
    //             ano: 2000 + i,
    //             materia: `Matéria ${i}`,
    //             preco: `R$ ${i.toFixed(2)}`
    //         })
    //     }
    //     setLivros(livrosArray)
    // }, [])

    return (
        <main>
            <ListarLivros />
        </main>
    )

}

export default Main