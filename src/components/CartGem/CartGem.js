import React, { useState } from "react";
import {
  Item,
  GemstoneImage,
  Title,
  Info,
  Price,
  Weight,
} from "./CartGem.styled";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import { connect } from "react-redux";
import { removeFromCard } from "../../redux/shop/shop-actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CartGem({ image, title, price, weight, id, removeFromCard }) {
  const [showGemstone, setShowGemstone] = useState(true);
  return (
      <div>
        {showGemstone ? (
            <Item>

              <Info>
                <Title>{title}</Title>
                <GemstoneImage src={image} />
                <Weight>{weight} ct</Weight>
                <Price>{price} $</Price>
                <Link
                    onClick={() => {
                      removeFromCard(id);
                      setShowGemstone(false);
                    }}
                    to="/cart"
                >
                  <RemoveShoppingCart
                      style={{
                        marginLeft: "6.2rem",
                        cursor: "pointer",
                        fontSize: "250%",
                        color: "red",
                      }}
                  />
                </Link>
              </Info>
            </Item>
        ) : null}
      </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCard: (id) => dispatch(removeFromCard(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartGem);
