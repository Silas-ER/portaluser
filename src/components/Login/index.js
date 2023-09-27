import styled from 'styled-components';

const SessaoFormulario = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%; 
`

const FormularioLogin = styled.form`
  border: 5px solid black;
  border-radius: 8px;
  margin-top: 10%;
  padding: 5px;
  width: 90%;
  max-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginInput = styled.input`

`

const LoginTitle = styled.label`

`

const LoginButton = styled.button`

`

function LoginForm() {
  return (
    <SessaoFormulario>
      <FormularioLogin>
        <h1>Entrar no sistema</h1>
        <p>
          <label htmlFor="username">Login:</label>
          <br/>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="usuário"
          />
        </p>
        <p>
          <label htmlFor="password">Senha:</label>
          <br/>
          <input 
            type="password" 
            id="lname" 
            name="lname"
            placeholder="senha"
          />
        </p>
        <p>
          <button id="meuBotao" class="botao-personalizado" onclick="alert('Botão clicado!')">Entrar</button>
        </p>
      </FormularioLogin>
    </SessaoFormulario>
  );
}

export default LoginForm;
