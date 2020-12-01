import React from "react";
import RubyImage from "../../icons/ruby.png";
import {AllGemstones} from "./ItemsCatalog.styled";
import GemCatalog from "../../components/GemCatalog/GemCatalog";
import SmaragdImage from "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import TopazImage from "../../icons/397-topaz-blog-73662901096110_small.jpg";
import SapfireImage from "../../icons/400-sapfire-blog-40945721330203_small.jpg";

const url = "http://localhost:3000/gemstones";
let gemstones = [];

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            gemstones.push(data[i]);
        }
        renderAllItems();
    });


const renderAllItems = () =>
    gemstones.map((gem, index) => {
        return (
            <GemCatalog
                key={index}
                image={SmaragdImage}
                title={gem.name}
                price={gem.price_in_usd_dollars}
                weight={gem.weight_in_carats}
            />

        );
    });

const renderAllItems1 = () =>
    gemstones.map((gem, index) => {
        return (
            <GemCatalog
                key={index}
                image={TopazImage}
                title={gem.name}
                price={gem.price_in_usd_dollars}
                weight={gem.weight_in_carats}
            />

        );
    });

const renderAllItems2 = () =>
    gemstones.map((gem, index) => {
        return (
            <GemCatalog
                key={index}
                image={SapfireImage}
                title={gem.name}
                price={gem.price_in_usd_dollars}
                weight={gem.weight_in_carats}
            />

        );
    });

function ItemsCatalog() {
    return <AllGemstones>{renderAllItems()},{renderAllItems1()},{renderAllItems2()}</AllGemstones>;
}

export default ItemsCatalog;
