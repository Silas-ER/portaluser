import logo from '../../img/logo.png';
import styled from 'styled-components';
import Nav from '../HeaderNav';


const HeaderGeral = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #03D7FD;
`

function Header (){
    return(
        <HeaderGeral>
            <img src={logo} alt='logo' width={250}/> 
            <Nav/>
        </HeaderGeral>
    );
}

export default Header;