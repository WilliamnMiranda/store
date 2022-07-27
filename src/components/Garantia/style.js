import styled from 'styled-components'
export const ContainerGarantia = styled.article`
  padding: 40px 10px;
  border:1px solid rgba(1,1,1,0.2);
  width: 180px;
  height: 240px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :first-child{
    margin-left: 0px;
  }
  @media(max-width: 800px){
    margin-left: 0px;
    width: 45%;
  }
`
export const TempoGarantia = styled.div`
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  color: #FC6B0F;
`
export const ParcelasGarantiga = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ValorGarantias = styled.div`
text-align: center;
color:#565C69;
font-size: 1.5em;
`

export const SelecionarGarantia = styled.div`
  text-align: center;
  input{
    width: 20px;
    height: 20px;
  }
`
export const ValorGarantia = styled.span`
  font-size: 1.5em;
`