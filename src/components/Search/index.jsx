import { Input } from "../Inputs/Input";
import { BsSearchHeart } from "react-icons/bs";

import { SearchContainer } from "./styles";

export function Search({...rest }) {
  return (
    <SearchContainer {...rest}>
      <Input
        placeholder="Busque por pratos ou ingredientes"
      />
    </SearchContainer>
  );
}
