import { PiMagnifyingGlass } from "react-icons/pi";
import { useState } from "react";
import { Input } from "../Input";

import { SearchContainer } from './styles'

export function Search({ onChange, onClickButton, icon, ...rest }) {
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
        Icon={PiMagnifyingGlass}
        placeholder='Busque por pratos ou ingredientes'
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}
