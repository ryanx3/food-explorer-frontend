import { Input } from "../Inputs/Input";
import { BsSearchHeart } from "react-icons/bs";
import { useSearch } from "../../hooks/Search";

import { SearchContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Search({ searchValue, ...rest }) {
  const RedirectTo = useNavigate();
  const { search, setSearch } = useSearch();

  function executeSearchOnEnter(e) {
    const valueEnteredInSearch = e.target.value.trim();
    if (e.key === "Enter") {
      setSearch(valueEnteredInSearch);
      RedirectTo("/");
    } else if (valueEnteredInSearch === "") {
      return;
    }
  }

  return (
    <SearchContainer {...rest}>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        onKeyPress={executeSearchOnEnter}
        icon={BsSearchHeart}
        defaultValue={search}
      />
    </SearchContainer>
  );
}
