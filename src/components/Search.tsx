import { Input } from "./Inputs/Input";
import { BsSearchHeart, BsArrowLeftShort } from "react-icons/bs";

import { useSearch } from "../hooks/Search";
import { useNavigate } from "react-router-dom";
import { useSideMenu } from "../hooks/SideMenu";

import { SearchContainer } from "./styles/Search";

export function Search({ ...rest }) {
  const RedirectTo = useNavigate();
  const { search, setSearch } = useSearch();
  const { setIsMenuOpen } = useSideMenu()

  function executeSearchOnEnter(e) {
    const valueInSearch = e.target.value.trim();
    if (e.key === "Enter") {
      setSearch(valueInSearch);
      setIsMenuOpen(false)
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
