
import React from "react";
import { BenefitContainer } from '../../containers/Benefits/benefits.styled.js';
import {
    BenefitItemContainer,
    BenefitItemImage,
    BenefitTitle,
} from "./BenefitItem.styled";

const BenefitItem = ({ image, text }) => {
    return (
        <BenefitItemContainer>
            <BenefitItemImage src={image} />
            <BenefitTitle>{text}</BenefitTitle>
        </BenefitItemContainer>
    );
};

export default BenefitItem;