import styled from 'styled-components';

const Rodape = styled.footer`
    position: fixed;
    background-color: #F0BCB1;
    padding: 10px; 
    bottom: 0; 
    left: 0; 
    width: 100%;
    text-align: center;
` 

function Footer (){
    return(
        <Rodape>
            <p>Produzido pelo departamento de TI - Produmar &#169;</p>
        </Rodape>
    );
}

export default Footer; 