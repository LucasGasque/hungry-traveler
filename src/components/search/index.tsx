import { Container, Box } from "./style";
import { BiSearch } from "react-icons/bi";

interface SearchProps {
  showRestaurants: (input: string) => void;
  setSearchValue: (input: string) => void;
  searchValue: string;
}

const Search = ({
  showRestaurants,
  setSearchValue,
  searchValue,
}: SearchProps) => {
  return (
    <Container>
      <Box>
        <input
          placeholder="Procurar"
          value={searchValue}
          onChange={(e) => {
            showRestaurants(e.target.value);
            setSearchValue(e.target.value);
          }}
        />
        <button>
          <BiSearch size="2em" />
        </button>
      </Box>
    </Container>
  );
};

export default Search;
