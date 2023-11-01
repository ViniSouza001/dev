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
                <Link to="/MeusLivros">
                    <p className='black'>Meus livros</p>
                </Link>

                <Link to='/MaisLidos'>
                    <p className='black'>Mais lidos</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header