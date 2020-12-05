import React from "react";
import BenefitItem from "../../components/BenefitItem/BenefitItem";
import { WhyUsContainer, WhyUsPoints, WhyUsTitle } from "./benefits.styled";
import Orders from "../../icons/64166595551762.jpg";
import FastDelivery from "../../icons/44811726772297.jpg";
import SelectPhoto from "../../icons/73306214527709.jpg";
import RealPhotos from "../../icons/90536488179637.jpg";
import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";

const Benefits = () => {
    return (
        <WhyUsContainer>
            <WhyUsPoints>
                <BenefitItem image={Orders} text={"Orders from 1 unit"} />
                <BenefitItem image={FastDelivery} text={"Fast delivery"} />
                <BenefitItem image={RealPhotos} text={"Real photos"} />
                <BenefitItem image={SelectPhoto} text={"selection by photo"}
                />
            </WhyUsPoints>
            <ButtonPB to="/about" style={{ marginBottom: "2rem" }}>
                About Us
            </ButtonPB>
        </WhyUsContainer>
    );
};

export default Benefits;
