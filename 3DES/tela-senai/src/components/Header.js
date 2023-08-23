import imagem from '../assets/senai-logo.png'

function Header() {

    function mudarTela() {
        window.location.href = './pages/MeusLivros'
    }

    return (
        <header>
            <div id="logo">
                <img src={imagem} />
                <h3 className='black'>Biblioteca Virtual</h3>
            </div>
            <nav>
                <a onClick={() => mudarTela()}>Meus livros</a>
                <a>Mais lidos</a>
            </nav>
        </header>
    )
}

export default Header