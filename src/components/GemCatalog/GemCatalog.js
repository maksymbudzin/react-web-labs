import React from "react";
import {
  Item,
  GemstoneImage,
  Title,
  Options,
  Price,
  Weight,
  Info,
  ItemButton,
} from "./GemCatalog.styled";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const GemCatalog = ({ image, title, price, weight, id }) => {
  return (
    <Item>
      <GemstoneImage src={image} />
      <Title>{title}</Title>
      <Info>
        <Price>{price} $</Price>
        <Weight>{weight} ct</Weight>
      </Info>
      <Options>
        <ItemButton to={`/catalog/${id}`}>Learn more</ItemButton>
          <ItemButton>Add to cart</ItemButton>
      </Options>
    </Item>
  );
};

export default GemCatalog;
