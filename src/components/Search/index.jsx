import { Input } from "../Inputs/Input";
import { BsSearchHeart, BsArrowLeftShort } from "react-icons/bs";
import { useSearch } from "../../hooks/Search";

import { SearchContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Search({ ...rest }) {
  const RedirectTo = useNavigate();
  const { search, setSearch } = useSearch();

  function executeSearchOnEnter(e) {
    const valueInSearch = e.target.value.trim();
    if (e.key === "Enter") {
      setSearch(valueInSearch);
      RedirectTo("/");
    } else if (valueInSearch === "") {
      return;
    }
  }

  const searchIcon = search ? (
    <BsArrowLeftShort size={32} onClick={() => setSearch("")} />
  ) : (
    <BsSearchHeart size={24} />
  );

  return (
    <SearchContainer {...rest}>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        onKeyPress={executeSearchOnEnter}
        icon={searchIcon}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchContainer>
  );
}
