import React, {useEffect, useState} from "react";
import {
    GemstoneBlock,
    GemstoneImage,
    GemstoneName,
    GemstoneWeight,
    GemstonePrice,
    GemstoneTextInfo,
    GemstoneDescription,
    ReadMore,
} from "./ItemDescr.styled";
import SmaragdImage from  "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {ItemButton, Options} from "../../components/GemCatalog/GemCatalog.styled";

const url = "http://localhost:3000/gemstones";
let description =
    "         Smaragd is a variety of the beryl species and is related to aquamarine and green beryl. The first known smaragd mines were in Egypt. ... Smaragd has a hardness of 7.5-8.0 on the Mohs Hardness Scale. Smaragd is the only stone with a cut named after it. , like all colored gemstones, are graded using four basic parameters–the four Cs of connoisseurship: color, clarity, cut and carat weight";

function ItemDescr({id}) {
    useEffect(() => {
        fetchItems();
    }, []);
    const [item, setItem] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(url + "/" + id);
        const item = await data.json();
        setItem(item);
    };

    const [isTruncated, setIsTruncated] = useState(true);
    const resultDescription = isTruncated
        ? description.slice(0, 154)
        : description;
    const changeIsTruncated = () => {
        setIsTruncated(!isTruncated);
    };
    return (
        <GemstoneBlock>
            <GemstoneImage src={SmaragdImage}/>
            <GemstoneTextInfo>
                <GemstoneName>Name of gem : {item.name}</GemstoneName>
                <GemstoneWeight>Carats : {item.weight_in_carats} ct.</GemstoneWeight>
                <GemstonePrice>Price : {item.price_in_usd_dollars} $</GemstonePrice>
                <ItemButton>Add to cart</ItemButton>
            </GemstoneTextInfo>
            <GemstoneDescription>
                {resultDescription}
                <ReadMore onClick={changeIsTruncated}>
                    {isTruncated ? "Read More >>>" : "<<< Read Less"}
                </ReadMore>
            </GemstoneDescription>
        </GemstoneBlock>
    );
}

export default ItemDescr;
