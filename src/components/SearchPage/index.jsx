import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import * as Styled from "./styles";

export const SearchPage = () => {
  const [q] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const query = q.get("query");
  const apiurl = import.meta.env.VITE_API_SEARCH;

  const fetchSearch = async () => {
    const response = await fetch(`${apiurl}${query}`);
    const data = await response.json();
    setPage(1);
    setMovies(data.results);
    setTotalPages(data.total_pages);
    return data;
  };

  const newPage = async () => {
    const response = await fetch(`${apiurl}${query}&page=${page}`);
    const data = await response.json();
    setMovies(data.results);
    return data;
  };

  const { data: newPageData } = useQuery({
    queryKey: ["newPage", { page }],
    queryFn: newPage,
    enabled: true,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["movies", { query }],
    queryFn: fetchSearch,
  });

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    if (page === totalPages) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <Styled.Container>
      <Styled.ContainerCard>
        {isLoading && <p>Carregando...</p>}
        {data &&
          movies.map((movie) => (
            <Styled.Card key={movie.id}>{movie.title}</Styled.Card>
          ))}
      </Styled.ContainerCard>
      {page}
      <div>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Próximo</button>
      </div>
    </Styled.Container>
  );
};
