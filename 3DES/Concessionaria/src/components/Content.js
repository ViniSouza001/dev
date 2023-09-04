
function Content({ title, content, informacoes, vender, clientes }) {

    function mostrarItem(cliente) {
        console.log(cliente)
    }

    if (!content) {
        return (
            <>
                <h1 className="tituloWindow">{title}</h1>
                {informacoes && informacoes.map((info, index) =>
                (
                    <div className="dados" key={index}>
                        <p className="pWindow">Modelo: {info.modelo} | Preço: R${info.preco.toFixed(2)}</p>
                        <button className="btnVender" onClick={() => vender(info.modelo, index)}>Vender</button>
                    </div>
                ))}
                {informacoes.length === 0 && <p>Não há informações para serem exibidas</p>}
            </>
        )
    } else {
        return (
            <>
                <h1 className="tituloWindow">{title}</h1>
                <p className="pSelect">
                    Clientes: <select name="clientes">
                        {clientes.map((clients) => (
                            clients.map((eachOne, index) => (
                                <option key={index} value={eachOne.nome}>{eachOne.nome}</option>
                            ))
                        ))}
                    </select>
                </p>
                <button className='btnVender'>Confirmar</button>
            </>
        )
    }
}

export default Content