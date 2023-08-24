import imagem from '../assets/senai-logo.png'
import { Link } from 'react-router-dom'
import MaisLidos from './pages/MaisLidos'

function Header() {

    function mudarTela() {
        window.location.href = './pages/MeusLivros'
    }

    return (
        <header>
            <div id="logo">
                <img src={imagem} />
                <Link to='/'>
                    <h3 className='black'>Biblioteca Virtual</h3>
                </Link>
            </div>
            <nav>
                <p>Meus livros</p>
                <Link to='/MaisLidos'>
                    <p>Mais lidos</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header