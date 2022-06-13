import React from "react";
import {
  Container,
  Tittle,
  ContainerFormulario,
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
    passwordConfirm: '',
    identificador: '',
    cep: ''
  });
  const handleChange = ({target}) => { setDados({ [target.name]: target.value }) };
  const { register } = React.useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    register(dados);
  }
  return (
    <Container>
      <Tittle>QUERO ME CADASTRAR</Tittle>
      <ContainerFormulario>
      <ContainerInput onSubmit={submit}>
          <InputValue onChange={handleChange} placeholder={"Name *"} name='name' value={dados.name}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"E-mail *"} name='email' value={dados.email}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"Crie sua senha *"} name='password' value={dados.password}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"Confirme a senha *"} name='passwordConfirm' value={dados.passwordConfirm}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"CPF ou CNPJ *"} name='identificador' value={dados.identificador}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"CEP *"} name='cep' value={dados.cep}/>
        </ContainerInput>
        <ButtonSubmit> ENTRAR </ButtonSubmit>
      </ContainerFormulario>
    </Container>
  );
};

export default Register;
