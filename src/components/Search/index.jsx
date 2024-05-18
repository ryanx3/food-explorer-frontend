import { Input } from "../Inputs/Input";
import { BsSearchHeart } from "react-icons/bs";
import { useSearch } from "../../hooks/Search";

import { SearchContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Search({ searchValue, ...rest }) {
  const RedirectTo = useNavigate();
  const { setSearch } = useSearch();

  function executeSearchOnEnter(e) {
    const searchValue = e.target.value.trim();
    if (e.key === "Enter") {
      setSearch(searchValue);
      RedirectTo("/");
    } else if (searchValue === "") {
      return;
    }
  }

  return (
    <SearchContainer {...rest}>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        onKeyPress={executeSearchOnEnter}
        defaultValue={searchValue}
        icon={BsSearchHeart}
      />
    </SearchContainer>
  );
}
