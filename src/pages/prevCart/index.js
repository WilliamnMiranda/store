import React from "react";
import { FaCheck, FaMedal, FaAngleUp } from "react-icons/fa";
import {
  Container,
  ContainerProdutoAdicionado,
  ContainerFotoProduto,
  ContainerNomeProduto,
  ContainerValorProduto,
  NameProduct,
  ContainerInfosProdutoAdicionado,
  MessageProduct,
  Parcelas,
  Avista,
  TextInfo,
  ContainerText,
  ContainerServicos,
  ContainerAdicionarServico,
  ContainerValoresServico,
  ContainerTittle,
  ContainerInfoGarantia,
  ContainerGarantias,
  Garantia,
  TempoGarantia,
  ParcelasGarantiga,
  ValorGarantias,
  SelecionarGarantia
} from "./style";
import { useParams } from "react-router";
import productServices from "../../services/product";
const PrevCart = () => {
  const { id } = useParams();
  const [product, setProductCart] = React.useState({});
  const getProduct = async () => {
    const product = await productServices.getProductById(id);
    setProductCart(product);
  };
  React.useEffect(() => {
    getProduct();
  }, []);
  const JUROS = 1;
  const INCREASED = JUROS / 100 * 700
  const TERM_VALUE = ((product.price + INCREASED) / 12).toFixed(2);
  return (
    <Container>
      <ContainerProdutoAdicionado>
        <ContainerInfosProdutoAdicionado>

          <ContainerFotoProduto> </ContainerFotoProduto>

          <ContainerNomeProduto>
            <span>Huskey gamimg Brasil</span>
            <NameProduct>{product.name}</NameProduct>
          </ContainerNomeProduto>

          <ContainerValorProduto>
            <Parcelas>
              <p> <strong> 12x R$ {TERM_VALUE} </strong> </p>
              <p> <strong> (A prazo: R$: {product.price + INCREASED}) </strong> </p>
            </Parcelas>

            <Avista>
              <div> <strong> R$ {product.price} </strong> </div>
              <p>( A vista )</p>
            </Avista>
          </ContainerValorProduto>

        </ContainerInfosProdutoAdicionado>

        <MessageProduct>
          <div>
            <span><FaCheck /></span>
          </div>
          produto adicionado com sucesso
        </MessageProduct>
      </ContainerProdutoAdicionado>

      <ContainerText> <TextInfo>Complemente sua compra com nossos <span>servicos exclusivos <strong>STORE</strong></span></TextInfo> </ContainerText>

      <ContainerServicos>
        <ContainerAdicionarServico>
          <ContainerTittle>
            <div>
              <span> <FaMedal /></span>
              <h1>Garantia estendida</h1>
            </div>
            <span> <FaAngleUp /></span>
          </ContainerTittle>
          <ContainerInfoGarantia>
            <p>Aproveite nossos planos de <strong>garantia estendida</strong> e matenha o seu produto protegido por mais tempo</p>
          </ContainerInfoGarantia>

          <ContainerGarantias>
            <Garantia>
              <TempoGarantia> <strong>Sem garantia</strong></TempoGarantia>
              <ParcelasGarantiga>
                <p>Em ate 10x</p>
                <p>Sem juros de</p>
              </ParcelasGarantiga>
              <ValorGarantias><strong>R$ 42,06</strong></ValorGarantias>
              <SelecionarGarantia>
                <input type="radio" />
              </SelecionarGarantia>
            </Garantia>
            <Garantia>
              <TempoGarantia><strong>24 meses</strong></TempoGarantia>
              <ParcelasGarantiga>
                <p>Em ate 10x</p>
                <p>Sem juros de</p>
              </ParcelasGarantiga>
              <ValorGarantias><strong>R$ 42,06</strong></ValorGarantias>
              <SelecionarGarantia>
                <input type="radio" />
              </SelecionarGarantia>
            </Garantia>
            <Garantia>
              <TempoGarantia><strong>38 meses</strong></TempoGarantia>
              <ParcelasGarantiga>
                <p>Em ate 10x</p>
                <p>Sem juros de</p>
              </ParcelasGarantiga>
              <ValorGarantias><strong>R$ 42,06</strong></ValorGarantias>
              <SelecionarGarantia>
                <input type="radio" />
              </SelecionarGarantia>
            </Garantia>
            <Garantia>
              <TempoGarantia><strong>Vitalicio</strong></TempoGarantia>
              <ParcelasGarantiga>
                <p>Em ate 10x</p>
                <p>Sem juros de</p>
              </ParcelasGarantiga>
              <ValorGarantias><strong>R$ 42,06</strong></ValorGarantias>
              <SelecionarGarantia>
                <input type="radio" />
              </SelecionarGarantia>
            </Garantia>
          </ContainerGarantias>
        </ContainerAdicionarServico>
        <ContainerValoresServico></ContainerValoresServico>
      </ContainerServicos>
    </Container>
  );
};

export default PrevCart;
