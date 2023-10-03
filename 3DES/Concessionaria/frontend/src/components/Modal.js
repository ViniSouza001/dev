import ReactModal from "react-modal"
import Content from "./Content"
import { PiCaretLeftLight } from "react-icons/pi"
import { useState, useEffect } from 'react'
ReactModal.setAppElement('#root')

function Modal(props) {

    const [clientes, setClientes] = useState([])
    const [concessionarias, setConcessionarias] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/clientes', { method: 'GET' })
            .then(resp => resp.json())
            .then((data) => {
                const cliente = []
                cliente.push(data)
                setClientes(cliente)
            }).catch((err) => {
                console.log(err)
            })

        fetch('http://localhost:8081/concessionarias', { method: 'GET' })
            .then((resp) => resp.json())
            .then((data) => {
                let concessionaria = []
                concessionaria.push(data)
                concessionarias.push(concessionaria)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const vender = (modelo, index) => {
        props.setContent(modelo)
    }

    return (
        <ReactModal
            className='window'
            ariaHideApp={false}
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
        >
            <header className="headerWindow">
                {props.content && <p><PiCaretLeftLight onClick={() => props.setContent('')} /></p>}
                <p onClick={() => { props.closeModal() }} className="closeModal">X</p>
            </header>

            <Content
                title={!props.content ? `Área: ${ props.titulo }` : props.content}
                informacoes={props.informacoes}
                vender={vender}
                content={props.content}
                clientes={clientes}
                concessionarias={concessionarias}
            />
        </ReactModal>
    )
}

export default Modal