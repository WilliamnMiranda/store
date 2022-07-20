import React from "react";
import {
  ContainerProduct,
  HeaderProduct,
  ContainerPromo,
  Promo,
  Unidades,
  PhotoProduct,
  NameProduct,
  Values,
  LastValue,
  NewValue,
  ButtonCart,
  InfoPix,
} from "./style";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/cart";
const ItemProduct = ({ product }) => {
  const { addToCart } = React.useContext(CartContext)
  return (
    <ContainerProduct>
      <HeaderProduct>
        <ContainerPromo>
          <Promo>28%</Promo>
          <Unidades>
            <p>restam</p>
            <div>{product.inventory}</div>
            <p>UNID</p>
          </Unidades>
        </ContainerPromo>
        <Rating
          name="text-feedback"
          value={product.rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon />}
          size="small"
        />
      </HeaderProduct>

      <PhotoProduct>
        <img
          src={`https://api-store-application.herokuapp.com/${product.photo}`}
          alt="produto"
        />
      </PhotoProduct>
      <NameProduct>{product.name}</NameProduct>

      <Values>
        <LastValue>R$499,99</LastValue>
        <NewValue>R${product.price}</NewValue>
        <InfoPix>A vista no pix</InfoPix>
      </Values>

      <NavLink to={ localStorage.getItem('token') ? `/product/${product._id} ` : `/login`}>
        <ButtonCart onClick={()=> addToCart(product)}>COMPRAR</ButtonCart>
      </NavLink>
    </ContainerProduct>
  );
};

export default ItemProduct;
