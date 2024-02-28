import { PiMagnifyingGlass } from "react-icons/pi";
import { Container } from './styles'
import { useState } from "react";
import * as Input from "../Input";

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
    <Container {...rest}>
      <Input.Default
      icon={PiMagnifyingGlass}
        placeholder='Busque por pratos ou ingredientes'
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  );
}
