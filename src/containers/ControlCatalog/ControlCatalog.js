import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import { Control, ControlSection } from "./ControlCatalog.styled";
import PriceSlider from "./PriceSlider/PriceSlider";
import SearchSection from "./Search/SearchSection";

function ControlCatalog({ handleInput, setPriceRange }) {
    return (
        <Control>
            <ControlSection>
                <SearchSection handleInput={handleInput} />
                <PriceSlider setPriceRange={setPriceRange} />
            </ControlSection>
        </Control>
    );
}

export default ControlCatalog;

