import React from "react";
import {
  Container,
  Tittle,
  ContainerForm,
  ContainerInput,
  ButtonSubmit,
} from "./style";
import InputValue from "../../../components/Form/input";
import { UserContext } from "../../../contexts/user";
const Register = () => {
  const [dados,setDados] = React.useState({
    name: '',
    email: '',
    password: '',
    identificador: '',
    cep: ''
  });
  const [confirmPassword,setConfirmPassword] = React.useState(''); 
  const handleChange = ({target}) => { setDados({ ...dados, [target.name]: target.value }) };
  const { register } = React.useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    register(dados);
  }
  console.log(dados)
  return (
    <Container>
      <Tittle>QUERO ME CADASTRAR</Tittle>
      <ContainerForm  onSubmit={submit}>
      <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"Name *"} name='name' value={dados.name}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"E-mail *"} name='email' value={dados.email}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"Crie sua senha *"} name='password' value={dados.password}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={(e)=> setConfirmPassword(e.target.value)} placeholder={"Confirme a senha *"} name='passwordConfirm' value={confirmPassword}/>s
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"CPF ou CNPJ *"} name='identificador' value={dados.identificador}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"CEP  *"} name='cep' value={dados.cep}/>
        </ContainerInput>
        <ButtonSubmit> ENTRAR </ButtonSubmit>
      </ContainerForm>
    </Container>
  );
};

export default Register;
