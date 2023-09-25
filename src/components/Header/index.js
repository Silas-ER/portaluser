import './estilo.css';
import logo from '../../img/logo.png';

const navoptions = ['Home','Suporte','Relatórios'];

function Header (){
    return(
        <header className='header-geral'>
            <img src={logo} alt='logo' width={250}></img>  
            <nav>
                <ul className='nav-geral'>
                    {navoptions.map((options) => (
                        <li className='nav-itens'>{options}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;