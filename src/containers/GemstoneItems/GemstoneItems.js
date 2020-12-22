import React from "react";
import {
  CatalogPreviewContainer,
  CatalogPreviewContent,
  GemstonesPreview,
} from "./GemstoneItems.styled";
import GemstonePreviewItem from "../../components/GemInfo/GemInfo";
import TopazImage from "../../icons/397-topaz-blog-73662901096110_small.jpg";
import SmaragdImage from  "../../icons/394-smaragd-artikel-98970688109946_small.jpg";
import SapfireImage from "../../icons/400-sapfire-blog-40945721330203_small.jpg";
import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";
const GemstoneItems = () => {
  return (
      <CatalogPreviewContainer>
        <CatalogPreviewContent>
          <GemstonesPreview>
            <GemstonePreviewItem
                title={"Diamond"}
                description={"Lorem ipsum dolor sit amet consectetur"}
                priceFrom={650}
                image={SmaragdImage}
            />
            <GemstonePreviewItem
                title={"Nephrite"}
                description={"Lorem ipsum dolor sit amet consectetur"}
                priceFrom={400}
                image={TopazImage}
            />
            <GemstonePreviewItem
                title={"Ruby"}
                description={"Lorem ipsum dolor sit amet consectetur"}
                priceFrom={900}
                image={SapfireImage}
            />
          </GemstonesPreview>
          <ButtonPB to="/catalog">Show all gemstones</ButtonPB>
        </CatalogPreviewContent>
      </CatalogPreviewContainer>
  );
};

export default GemstoneItems;
