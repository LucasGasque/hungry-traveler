import { ReactNode } from "react";
import { Container } from "./style";

interface SearchResultsData {
  children?: ReactNode;
}

const SearchResults = ({ children }: SearchResultsData) => {
  return (
    <Container>
      <div>
        <h3>Resultados</h3>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </Container>
  );
};

export default SearchResults;
