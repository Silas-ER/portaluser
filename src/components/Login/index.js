import styled from 'styled-components';

const SessaoFormulario = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
`

const FormularioLogin = styled.form`
  margin-top: 10%;
  padding: 5px;
  width: 15%;
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
        <h1>Entrar</h1>
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
          
        </p>
      </FormularioLogin>
    </SessaoFormulario>
  );
}

export default LoginForm;
