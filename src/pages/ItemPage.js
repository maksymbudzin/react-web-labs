import React from "react";
import ItemInfo from "../containers/ItemDescr/ItemDescr";

function ItemPage(props) {
  return (
    <>
      <ItemInfo id={props.match.params.id} />
    </>
  );
}

export default ItemPage;
