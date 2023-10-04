import Modal from "./Modal"

import { useEffect, useState } from "react"

function Areas() {
    const [windowVisible, setWindowVisible] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [areas, setAreas] = useState([])
    const [informacoes, setInformacoes] = useState([])
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch('http://localhost:8081/areas', { method: "GET" });
                const data = await response.json();
                setAreas(data.response);
            } catch (error) {
                console.error('Erro ao carregar as áreas: ' + error);
                setAreas([])
            }
        };
        fetchAreas();
    }, []);

    const isUsed = (number) => {
        const area = areas.find(areaUsed => areaUsed.area === number);
        return area ? area : false;
    }


    function fetchArea(number) {
        setTitulo(number)
        fetch(`http://localhost:8081/infoArea/${ number }`)
            .then(response => response.json())
            .then(data => {
                setInformacoes(data)
            })
            .catch(err => {
                console.log('Não foi possível pesquisar a área requerida: ' + err)
            })

        setWindowVisible(true)
    }

    return (
        <>
            <div className={areas.length !== 0 && isUsed(1) ? "area a1 blue" : "area a1"} onClick={() => { fetchArea(1) }}>1</div>
            <div div className={areas.length !== 0 && isUsed(2) ? "area a2 blue" : "area a2"} onClick={() => { fetchArea(2) }}>2</div>
            <div className={areas.length !== 0 && isUsed(3) ? "area a3 blue" : "area a3"} onClick={() => { fetchArea(3) }}>3</div>
            <div className={areas.length !== 0 && isUsed(4) ? "area a4 blue" : "area a4"} onClick={() => { fetchArea(4) }}>4</div>
            <div className={areas.length !== 0 && isUsed(5) ? "area a5 blue" : "area a5"} onClick={() => { fetchArea(5) }}>5</div>
            <div className={areas.length !== 0 && isUsed(6) ? "area a6 blue" : "area a6"} onClick={() => { fetchArea(6) }}>6</div>
            <div className={areas.length !== 0 && isUsed(7) ? "area a7 blue" : "area a7"} onClick={() => { fetchArea(7) }}>7</div>
            <div className={areas.length !== 0 && isUsed(8) ? "area a8 blue" : "area a8"} onClick={() => { fetchArea(8) }}>8</div>
            <div className={areas.length !== 0 && isUsed(9) ? "area a9 blue" : "area a9"} onClick={() => { fetchArea(9) }}>9</div>
            <div className={areas.length !== 0 && isUsed(10) ? "area a10 blue" : "area a10"} onClick={() => { fetchArea(10) }}>10</div>
            <div className={areas.length !== 0 && isUsed(11) ? "area a11 blue" : "area a11"} onClick={() => { fetchArea(11) }}>11</div>

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