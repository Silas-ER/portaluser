import './estilo.css';
import logo from '../../img/logo.png';

function Footer (){
    return(
        <header className='header-geral'>
            <img src={logo} alt='logo' width={250}></img>  
            <nav>
                <ul className='nav-geral'>
                    <li className='nav-itens'>Home</li>
                    <li className='nav-itens'>Suporte</li>
                    <li className='nav-itens'>Relatórios</li>
                </ul>
            </nav>
        </header>
    );
}

export default Footer;