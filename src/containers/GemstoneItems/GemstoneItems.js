import React from "react";
import {
    GemstoneContainer,
    GemstoneContent,
    GemstonesPreview,

} from "./GemstoneItems.styled";
import GemstoneInfo from "../../components/GemInfo/GemInfo";
import TopazImage from "../../icons/397-topaz-blog-73662901096110_small.jpg";
import SmaragdImage from "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import SapfireImage from "../../icons/400-sapfire-blog-40945721330203_small.jpg";
import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";
import {HeroBackground} from "../MainSection/Main.styled";
const GemstoneItems = () => {
    return (
        <GemstoneContainer>
            <GemstoneContent>
                <GemstonesPreview>
                    <GemstoneInfo
                        title={"Smaragd"}
                        description={"Lorem ipsum dolor sit amet consectetur"}
                        priceFrom={650}
                        image={SmaragdImage}
                    />
                    <GemstoneInfo
                        title={"Topaz"}
                        description={"Lorem ipsum dolor sit amet consectetur"}
                        priceFrom={400}
                        image={TopazImage}
                    />
                    <GemstoneInfo
                        title={"Sapphire"}
                        description={"Lorem ipsum dolor sit amet consectetur"}
                        priceFrom={900}
                        image={SapfireImage}
                    />
                </GemstonesPreview>
                <ButtonPB href="/catalog">Show all gemstones</ButtonPB>
            </GemstoneContent>
        </GemstoneContainer>
    );
};

export default GemstoneItems;