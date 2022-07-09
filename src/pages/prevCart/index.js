import React from "react";
import {
  Container,
  ContainerProdutoAdicionado,
  ContainerFotoProduto,
  ContainerNomeProduto,
  ContainerValorProduto,
  NameProduct,
  ContainerInfosProdutoAdicionado,
  MessageProduct,
  Parcelas
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
            <p>Huskey gamimg Brasil</p>
            <NameProduct>{product.name}</NameProduct>
          </ContainerNomeProduto>

          <ContainerValorProduto>
              <Parcelas>
                  <p>12x R$ {TERM_VALUE}</p>
                  <p>(A prazo: R$: {product.price + INCREASED})</p>
              </Parcelas>
          </ContainerValorProduto>

        </ContainerInfosProdutoAdicionado>

        <MessageProduct>produto adicionado com sucesso</MessageProduct>
      </ContainerProdutoAdicionado>
    </Container>
  );
};

export default PrevCart;
