import React from "react";
import {
  Container,
  Tittle,
  ContainerForm,
  ContainerInput,
  ButtonSubmit,
} from "./style";
import InputValue from "../../../components/Form/input";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../contexts/user";
const Register = () => {
  const [dados,setDados] = React.useState({
    name: '',
    email: '',
    password: '',
    identificador: '',
    cep: ''
  });
  let navigate = useNavigate();
  const [confirmPassword,setConfirmPassword] = React.useState(''); 
  const handleChange = ({target}) => { setDados({ ...dados, [target.name]: target.value }) };
  const { register } = React.useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    await register(dados);
    navigate("/", { replace: true })
  }
  return (
    <Container>
      <Tittle>QUERO ME CADASTRAR</Tittle>
      <ContainerForm  onSubmit={submit}>
      <ContainerInput>
          <InputValue onChange={handleChange} placeholder={"Name *"} name='name' value={dados.name}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue type='email' onChange={handleChange} placeholder={"E-mail *"} name='email' value={dados.email}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue type='password' onChange={handleChange} placeholder={"Crie sua senha *"} name='password' value={dados.password}/>
        </ContainerInput>
        <ContainerInput>
          <InputValue type='password' onChange={(e)=> setConfirmPassword(e.target.value)} placeholder={"Confirme a senha *"} name='passwordConfirm' value={confirmPassword}/>
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
