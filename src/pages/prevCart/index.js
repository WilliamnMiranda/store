import React from "react";
import { FaCheck } from "react-icons/fa";
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
  Avista
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
    </Container>
  );
};

export default PrevCart;
