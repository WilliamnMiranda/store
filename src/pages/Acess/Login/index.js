import React from 'react'
import { Container, Tittle, ContainerForm, ContainerInput,ButtonSubmit, Recuperation, RecuperationText,
  SocialsLogins,SubTittle, ButtonFacebook,ButtonGoogle,ContainerButtons} from './style'
import InputValue from '../../../components/Form/input'
import { UserContext } from '../../../contexts/user';
const Login = () => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const {login,error} = React.useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    login(email,password);
  }
  return (
    <Container>
      <Tittle>JÁ TENHO CADASTRO</Tittle>
      <ContainerForm onSubmit={submit}>
        <ContainerInput>
          <InputValue value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={'E-mail, CPF ou CNPJ *'}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={'Senha *'} />
        </ContainerInput>
        {error && <p>{error}</p>}
        <ButtonSubmit type='submit'> ENTRAR </ButtonSubmit>
      </ContainerForm>
      <Recuperation>
        <RecuperationText>ESQUECI MEU LOGIN</RecuperationText>
        <RecuperationText>ESQUECI A MINHA SENHA</RecuperationText>
      </Recuperation>
      <SocialsLogins>
        <SubTittle>Quero acessar com minhas redes sociais</SubTittle>
        <ContainerButtons>
          <ButtonFacebook>Entrar com o Facebook</ButtonFacebook>
          <ButtonGoogle>Entrar com o Google</ButtonGoogle>
        </ContainerButtons>
      </SocialsLogins>
    </Container>
  )
}

export default Login