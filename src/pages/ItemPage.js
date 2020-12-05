import React from "react";
import ItemDescr from "../containers/ItemDescr/ItemDescr";

function ItemPage(props) {
  return (
    <>
      <ItemDescr id={props.match.params.id} />
    </>
  );
}

export default ItemPage;
