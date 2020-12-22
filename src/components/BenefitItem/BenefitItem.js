import React from "react";
import {
    WhyUsItemContainer,
    WhyUsItemImage,
    WhyUsItemTitle,
} from "./BenefitItem.styled";

const BenefitItem = ({ image, text }) => {
    return (
        <WhyUsItemContainer>
            <WhyUsItemImage src={image} />
            <WhyUsItemTitle>{text}</WhyUsItemTitle>
        </WhyUsItemContainer>
    );
};

export default BenefitItem;
