import { Container } from "../../Styles/reusableStyles";
import { Pagination } from "../Pagination";
import { Movies } from "../Movies";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getPopularMovies } from "../../utils/fetchs";

export const Home = () => {
  const popularMoviesUrl = import.meta.env.VITE_POPULAR_MOVIES_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["discover", { page }],
    queryFn: () =>
      getPopularMovies(popularMoviesUrl, apiKey, page, setTotalPages),
  });

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  return (
    <Container>
      <h1>Popular Movies</h1>
      {isError && <p>Ocorreu um erro ao buscar dados!</p>}
      {!isLoading && data && data.results && <Movies data={data} />}
      {!isLoading && data && data.total_pages && (
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </Container>
  );
};
