import { useState } from "react";
import { Input } from "../Inputs/Input";
import { BsSearchHeart } from "react-icons/bs";

import { SearchContainer } from "./styles";

export function Search({ onChange, onClickButton, ...rest }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SearchContainer {...rest}>
      <Input
        Icon={BsSearchHeart}
        placeholder="Busque por pratos ou ingredientes"
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}
