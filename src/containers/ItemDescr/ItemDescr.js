import React, {useEffect, useState} from "react";
import axios from "axios";
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
import SmaragdImage from "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {ItemButton, Options} from "../../components/GemCatalog/GemCatalog.styled";

const url = "http://localhost:3000/gemstones";
let description =
    "         Smaragd is a variety of the beryl species and is related to aquamarine and green beryl. The first known smaragd mines were in Egypt. ... Smaragd has a hardness of 7.5-8.0 on the Mohs Hardness Scale. Smaragd is the only stone with a cut named after it. , like all colored gemstones, are graded using four basic parameters–the four Cs of connoisseurship: color, clarity, cut and carat weight";

function ItemDescr({id}) {
    useEffect(() => {
        fetchItems();
        window.scrollTo(0, 0);
    }, []);
    const [isLoading, setLoading] = useState(false);
    const [gem, setGem] = useState([]);
    const fetchItems = async () => {
        const data = await axios(url + "/" + id);
        setGem(data.data);

        // for loading effect
        await new Promise((r) => setTimeout(r, 500));
        setLoading(true);
    };

    const [isTruncated, setIsTruncated] = useState(true);
    const resultDescription = isTruncated
        ? description.slice(0, 154)
        : description;
    const changeIsTruncated = () => {
        setIsTruncated(!isTruncated);
    };
    return (
        <div>
            {isLoading ? (
                <GemstoneBlock>
                    <GemstoneImage src={SmaragdImage}/>
                    <GemstoneTextInfo>
                        <GemstoneName>Gemstone Type: {gem.name}</GemstoneName>
                        <GemstoneWeight>Weight: {gem.weight_in_carats} ct.</GemstoneWeight>
                        <GemstonePrice>Buy for {gem.price_in_usd_dollars} $</GemstonePrice>
                        <AddShoppingCartIcon
                            style={{
                                margin: "1rem 0 0 2.5rem",
                                cursor: "pointer",
                                fontSize: "350%",
                            }}
                        />
                    </GemstoneTextInfo>
                    <GemstoneDescription>
                        {resultDescription}
                        <ReadMore onClick={changeIsTruncated}>
                            {isTruncated ? "Read More >>>" : "<<< Read Less"}
                        </ReadMore>
                    </GemstoneDescription>
                </GemstoneBlock>
            ) : (
                <CircularProgress
                    color="primary"
                    style={{margin: "14% 50% 14% 50%"}}
                />
            )}
        </div>
    );
}

export default ItemDescr;
