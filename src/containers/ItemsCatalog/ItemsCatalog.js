import React, { useState, useEffect } from "react";
import SmaragdImage from  "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import { AllGemstones } from "./ItemsCatalog.styled";
import GemCatalog from "../../components/GemCatalog/GemCatalog";
const url = "http://localhost:3000/gemstones";

function ItemsCatalog({ searchString, priceValues }) {
  useEffect(() => {
    fetchItems();
  }, []);
  const [filteredItems, setfilteredItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setfilteredItems(items);
  };
  return (
    <AllGemstones>
      {filteredItems
        .filter((gem) => {
          return gem.name.toLowerCase().includes(searchString.toLowerCase());
        })
        .filter((gem) => {
          return (
            gem.price_in_usd_dollars <= priceValues[1] &&
            gem.price_in_usd_dollars >= priceValues[0]
          );
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
        ))}
    </AllGemstones>
  );
}

export default ItemsCatalog;
