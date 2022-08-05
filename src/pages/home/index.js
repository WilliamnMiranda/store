import React from "react";
import { ContainerHome, BannerHome, ContainerMain,ContainerProdutos } from "./style";
import productServices from "../../services/product";
import Banner from "../../imgs/banner.jpg";
import ItemProduct from '../../components/ItemProduct'
import { CartContext } from "../../contexts/cart";
const HomePage = () => {
  const [listProducts, setListProducts] = React.useState();
  const getProducts = async () => {
    const products = await productServices.get();
    setListProducts(products);
  };
  const { getItemsFromCart } = React.useContext(CartContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <ContainerHome>
      <BannerHome>
        <img src={Banner} alt="banner do site em promo" />
      </BannerHome>
      <ContainerMain>
        <ContainerProdutos>
          { listProducts && listProducts.map((product)=> <ItemProduct key={product._id} product={product}/>) }
        </ContainerProdutos>
      </ContainerMain>
    </ContainerHome>
  );
};

export default HomePage;
