import React from "react";
import { Search } from "./SearchSection.styled";
function SearchSection({ handleInput }) {
  return <Search onChange={handleInput} placeholder="Search..." />;
}

export default SearchSection;
