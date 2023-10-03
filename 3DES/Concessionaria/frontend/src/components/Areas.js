import Modal from "./Modal"

import { useState } from "react"

function Areas() {
    const [windowVisible, setWindowVisible] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [areas, setAreas] = useState([])
    const [informacoes, setInformacoes] = useState([])
    const [content, setContent] = useState('')

    useState(() => {
        const fetchAreas = async () => {
            const response = await fetch('http://localhost:8081/areas', { method: "GET" })
            const data = await response.json()
            setAreas(data)
        }
        fetchAreas()
    }, [])

    const isUsed = (number) => {
        areas.response.forEach((areaUsed) => {

            if (areaUsed.area == number) {
                return true
            } else return false
        })
    }

    function fetchArea(number) {
        setTitulo(number)
        fetch(`http://localhost:8081/infoArea/${ number }`)
            .then(response => response.json())
            .then(data => {
                setInformacoes(data)
            })
            .catch(err => {
                console.log('não foi possível pesquisar a área requerida: ' + err)
            })

        setWindowVisible(true)
    }

    return (
        <>
            {/* <div className={isUsed(1) ? "area a1 blue" : "area a1"} onClick={() => { fetchArea(1) }}>1</div> */}
            <div className="area a1" onClick={() => { fetchArea(1) }}>1</div>
            <div className="a2 area" onClick={() => { fetchArea(2) }}>2</div>
            <div className="a3 area" onClick={() => { fetchArea(3) }}>3</div>
            <div className="a4 area" onClick={() => { fetchArea(4) }}>4</div>
            <div className="a5 area" onClick={() => { fetchArea(5) }}>5</div>
            <div className="a6 area" onClick={() => { fetchArea(6) }}>6</div>
            <div className="a7 area" onClick={() => { fetchArea(7) }}>7</div>
            <div className="a8 area" onClick={() => { fetchArea(8) }}>8</div>
            <div className="a9 area" onClick={() => { fetchArea(9) }}>9</div>
            <div className="a10 area" onClick={() => { fetchArea(10) }}>10</div>
            <div className="a11 area" onClick={() => { fetchArea(11) }}>11</div>

            <Modal titulo={titulo} informacoes={informacoes} closeModal={() => {
                setWindowVisible(state => !state);
                setContent('');
            }} openModal={windowVisible}
                content={content}
                setContent={setContent} />
        </>
    )
}

export default Areas