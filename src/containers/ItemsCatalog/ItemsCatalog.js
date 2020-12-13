import React, {useState, useEffect} from "react";
import SmaragdImage from "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import {AllGemstones} from "./ItemsCatalog.styled";
import GemCatalog from "../../components/GemCatalog/GemCatalog";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const url = "http://localhost:3000/gemstones";

function ItemsCatalog({searchString, priceValues}) {
    useEffect(() => {
        fetchItems();
    }, [priceValues]);
    const [filteredItems, setfilteredItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const fetchItems = async () => {


        const data = await axios(url +
            "?" +
            "price_from=" +
            priceValues[0] +
            "&" +
            "price_to=" +
            priceValues[1]);
        setfilteredItems(data.data);

        // for loading effect
        await new Promise((r) => setTimeout(r, 400));
        setLoading(true);
    };
    return (
        <AllGemstones>
            {isLoading ? (
                filteredItems
                    .filter((gem) => {
                        return gem.name.toLowerCase().includes(searchString.toLowerCase());
                    })
                    .map((gem, index) => (
                        <GemCatalog
                            key={index}
                            image={SmaragdImage}
                            title={gem.name}
                            price={gem.price_in_usd_dollars}
                            weight={gem.weight_in_carats}
                            id={gem.id}
                        />
                    ))
            ) : (
                <CircularProgress
                    color="primary"
                    style={{marginLeft: "50%", marginTop: "7%", marginBottom: "7%"}}
                />
            )}
        </AllGemstones>
    );
}

export default ItemsCatalog;
