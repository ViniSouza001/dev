import ReactModal from "react-modal"
import Content from "./Content"
import { useState, useEffect } from 'react'
ReactModal.setAppElement('#root')

function Modal(props) {

    const [content, setContent] = useState('')
    const [clientes, setClientes] = useState([])

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
    }, [])

    const vender = (modelo, index) => {
        setContent(modelo)
    }

    return (
        <ReactModal
            className='window'
            ariaHideApp={false}
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
        >
            <header className="headerWindow">
                <p onClick={() => { props.closeModal(); setContent(''); }}>X</p>
            </header>

            <Content
                title={!content ? `Área: ${props.titulo}` : content}
                informacoes={props.informacoes}
                vender={vender}
                content={content}
                clientes={clientes}
            />
        </ReactModal>
    )
}

export default Modal