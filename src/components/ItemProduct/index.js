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
  const price = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  const valueDiscount = (product.price * product.promotion.discount)  / 100
  const priceDiscount = product.price -  valueDiscount
  return (
    <ContainerProduct>
      <HeaderProduct>
        <ContainerPromo>
          <Promo>{product.promotion.discount}%</Promo>
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
          src={product.photo}
          alt="produto"
        />
      </PhotoProduct>
      <NameProduct>
        <p>{product.name}</p>
      </NameProduct>

      <Values>
        <LastValue>{price}</LastValue>
        <NewValue>{priceDiscount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</NewValue>
        <InfoPix>A vista no pix</InfoPix>
      </Values>

      <NavLink onClick={()=> addToCart(product)} to={ localStorage.getItem('token') ? `/product/${product._id} ` : `/login`}>
        <ButtonCart>COMPRAR</ButtonCart>
      </NavLink>
    </ContainerProduct>
  );
};

export default ItemProduct;
