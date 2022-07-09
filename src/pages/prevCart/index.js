import React from "react";
import {
  Container,
  ContainerProdutoAdicionado,
  ContainerFotoProduto,
  ContainerNomeProduto,
  ContainerValorProduto,
  NameProduct,
  ContainerInfosProdutoAdicionado,
  MessageProduct
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
  return (
    <Container>
      <ContainerProdutoAdicionado>
        <ContainerInfosProdutoAdicionado>

          <ContainerFotoProduto> </ContainerFotoProduto>

          <ContainerNomeProduto>
            <p>Huskey gamimg Brasil</p>
            <NameProduct>{product.name}</NameProduct>
          </ContainerNomeProduto>

          <ContainerValorProduto></ContainerValorProduto>

        </ContainerInfosProdutoAdicionado>

        <MessageProduct>produto adicionado com sucesso</MessageProduct>
      </ContainerProdutoAdicionado>
    </Container>
  );
};

export default PrevCart;
