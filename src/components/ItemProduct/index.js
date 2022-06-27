import React from "react";
import { ContainerProduct, HeaderProduct,ContainerPromo,Promo,Unidades,PhotoProduct,NameProduct,Values,LastValue,NewValue,ButtonCart} from "./style";
import StarIcon from '@mui/icons-material/Star';
import Rating from "@mui/material/Rating";
const ItemProduct = ({ product }) => {
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
          <img src={ `https://api-store-application.herokuapp.com/${product.photo}`} alt='produto'/>
      </PhotoProduct>
      <NameProduct>
        {product.name}
      </NameProduct>

      <Values>
          <LastValue>R$499,99</LastValue>
          <NewValue>R${product.price}</NewValue>
          <p>A vista no pix</p>
      </Values>

      <ButtonCart>
          COMPRAR
      </ButtonCart>
    </ContainerProduct>
  );
};

export default ItemProduct;
