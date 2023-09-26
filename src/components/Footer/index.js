import styled from 'styled-components';

const Rodape = styled.footer`
    font-size: 12px;
    position: fixed;
    background-color: #F0BCB1;
    bottom: 0; 
    left: 0; 
    width: 100%;
    text-align: center;
` 

function Footer (){
    return(
        <Rodape>
            <p>Produzido pelo departamento de TI - <a href="https://produmar.ind.br/" target='blank'>Produmar</a> &#169;</p>
        </Rodape>
    );
}

export default Footer; 