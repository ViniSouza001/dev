import Modal from "./Modal"
import { useState } from "react"

function Areas() {
    const [windowVisible, setWindowVisible] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [informacoes, setInformacoes] = useState([])

    function fetchArea(number) {
        console.log(number)
        setTitulo(number)
        fetch(`http://localhost:8081/infoArea/${number}`)
            .then(response => response.json())
            .then(data => {
                setInformacoes(data)
                console.log(data)
            })
            .catch(err => {
                console.log('não foi possível pesquisar a área requerida: ' + err)
            })

        setWindowVisible(true)
    }

    return (
        <>
            <main>
                <div className="a1" onClick={() => fetchArea(1)}>1</div>
                <div className="a1" onClick={() => { fetchArea(2) }}>2</div>
                <div className="a1" onClick={() => { fetchArea(3) }}>3</div>
                <div className="a1" onClick={() => { fetchArea(4) }}>4</div>
                <div className="a1" onClick={() => { fetchArea(5) }}>5</div>
                <div className="a1" onClick={() => { fetchArea(6) }}>6</div>
                <div className="a1" onClick={() => { fetchArea(7) }}>7</div>
                <div className="a1" onClick={() => { fetchArea(8) }}>8</div>
                <div className="a1" onClick={() => { fetchArea(9) }}>9</div>
                <div className="a1" onClick={() => { fetchArea(10) }}>10</div>
                <div className="a1" onClick={() => { fetchArea(11) }}>11</div>

            </main>
            <Modal titulo={titulo} informacoes={informacoes} closeModal={() => setWindowVisible(state => !state)} openModal={windowVisible} />
        </>
    )
}

export default Areas