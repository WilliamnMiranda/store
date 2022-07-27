import React from "react";
import { FaCheck, FaMedal, FaAngleUp, FaCog } from "react-icons/fa";
import Garantia from "../../components/Garantia";
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
  ContainerTittleValoresServico,
  ContainerValorGarantia,
  ContainerValorTotalServicos,
  ContainerButton,
  ButtonComprar,
  ButtonContinuar,
  ValorTotal,
  ValorGarantia
} from "./style";
import { useParams } from "react-router";
import productServices from "../../services/product";
import { NavLink } from "react-router-dom";
const PrevCart = () => {
  const { id } = useParams();
  const [product, setProductCart] = React.useState({});
  const getProduct = async () => {
    const produto = await productServices.getProductById(id);
    setProductCart(produto);
  }
  React.useEffect(() => {
    getProduct()
  }, [])
  const price = product.price && product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const valueDiscount = product.price && (product.price * product.promotion.discount) / 100
  const priceDiscount = product.price && product.price - valueDiscount
  return (
    <Container>
      <ContainerProdutoAdicionado>
        <ContainerInfosProdutoAdicionado>

          <ContainerFotoProduto src={product.photo} />

          <ContainerNomeProduto>
            <span>Huskey gamimg Brasil</span>
            <NameProduct>{product.name}</NameProduct>
          </ContainerNomeProduto>

          <ContainerValorProduto>
            <Parcelas>
              <p> <strong> 12x {(product.price / 12).toFixed(2)}</strong> </p>
              <p> <strong> {price && price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} total </strong> </p>
            </Parcelas>

            <Avista>
              <div> <strong> R$ {priceDiscount && priceDiscount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </strong> </div>
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
              <h2>Garantia estendida</h2>
            </div>
            <span> <FaAngleUp /></span>
          </ContainerTittle>
          <ContainerInfoGarantia>
            <p>Aproveite nossos planos de <strong>garantia estendida</strong> e matenha o seu produto protegido por mais tempo</p>
          </ContainerInfoGarantia>

          <ContainerGarantias>
             <Garantia />
             <Garantia />
             <Garantia />
             <Garantia />
          </ContainerGarantias>
        </ContainerAdicionarServico>

        <ContainerValoresServico>
          <ContainerTittleValoresServico>
            <span><FaCog /></span>
            <h2>Servicos</h2>
          </ContainerTittleValoresServico>

          <ContainerValorGarantia>
            <p>
              <span>Garantia Estendida</span>
              <ValorGarantia> <strong> R$ 0,00 </strong> </ValorGarantia>
            </p>
            <p>
              <span>Taxas e juros</span>
              <ValorGarantia> <strong> R$ 0,00 </strong> </ValorGarantia>
            </p>
          </ContainerValorGarantia>

          <ContainerValorTotalServicos>
            <span>valor total dos servicos</span>
            <ValorTotal> <strong> R$ 304,01 </strong> </ValorTotal>
          </ContainerValorTotalServicos>

          <ContainerButton>
            <NavLink to='/cart'>
              <ButtonComprar>
                IR PARA O CARRINHO
              </ButtonComprar>
            </NavLink>
            <ButtonContinuar>
              <NavLink to='/'>
                CONTINUAR COMPRANDO
              </NavLink>
            </ButtonContinuar>
          </ContainerButton>
        </ContainerValoresServico>
      </ContainerServicos>
    </Container>
  );
};

export default PrevCart;
