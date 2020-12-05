import React from "react";
import {
    Item,
    Image,
    Info,
    Title,
    Description,
    PriceFrom,
} from "./GemInfo.styled";

const GemstoneItem = ({ title, description, priceFrom, image }) => {
    return (
        <Item>
            <Image src={image} />
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <PriceFrom href={"/catalog"}>{priceFrom}</PriceFrom>
            </Info>
        </Item>
    );
};

export default GemstoneItem;
