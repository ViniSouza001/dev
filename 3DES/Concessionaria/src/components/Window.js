import { useState } from 'react'
import ReactModal from "react-modal"

ReactModal.setAppElement('#root')

function Window(props) {


    return (
        <ReactModal
            className='window'
            ariaHideApp={false}
            isOpen={props.openModal}
            onRequestClose={() => props.closeModal()}
        >
            <>
                <header className="headerWindow">
                    <p onClick={() => props.closeModal()}>X</p>
                </header>
                <h1 className="tituloWindow">Área {props.titulo}</h1>
                {props.informacoes && props.informacoes.map((info, index) =>
                (
                    <div key={index} className="dados">
                        <p className="pWindow">Modelo: {info.modelo} | Preço: R${info.preco.toFixed(2)}</p>
                        <button className="btnVender">Vender</button>
                    </div>
                ))
                }
                {props.informacoes.length === 0 && <p>Não há informações para serem mostradas</p>}
            </>
        </ReactModal >
    )
}

export default Window