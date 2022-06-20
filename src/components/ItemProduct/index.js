import React from "react";
import { ContainerProduct, HeaderProduct,ContainerPromo,Promo,Unidades } from "./style";
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
      {product.name}
    </ContainerProduct>
  );
};

export default ItemProduct;
