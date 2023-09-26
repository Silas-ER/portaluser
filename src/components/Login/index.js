import styled from 'styled-components';

const SessaoFormulario = styled.section`
    display: flex;
`

const FormularioLogin = styled.form`

`

const LoginInput = styled.input`

`

const LoginTitle = styled.label`

`

const LoginButton = styled.button`

`

function LoginForm() {
  return (
    <section>
      <form>
        <label htmlFor="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" />
      </form>
    </section>
  );
}

export default LoginForm;
