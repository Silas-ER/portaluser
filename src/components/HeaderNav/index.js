import styled from 'styled-components';

const navoptions = ['Home','Suporte','Relatórios'];

const Navegacao = styled.nav`

`
const ListaNavegacao = styled.ul`
    list-style: none;
    display: flex;
    padding: 10px 40px;
`
const ItensNavegacao = styled.li`
    margin-left: 20px;
    cursor: pointer;
`

function Nav (){
    return(
        <Navegacao>
            <ListaNavegacao>
                {navoptions.map((options) => (
                    <ItensNavegacao>{options}</ItensNavegacao>
                ))}
            </ListaNavegacao>
        </Navegacao>
    );
}

export default Nav;