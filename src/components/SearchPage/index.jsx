import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container } from "../../Styles/reusableStyles";
import { Pagination } from "../Pagination";
import { Movies } from "../Movies";
import { getSearchedMovies } from "../../utils/fetchs";

export const SearchPage = () => {
  const [q] = useSearchParams();
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const query = q.get("query");
  const searchMoviesUrl = import.meta.env.VITE_SEARCH_MOVIES_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const { data, isLoading } = useQuery({
    queryKey: ["search", { query, page }],
    queryFn: () =>
      getSearchedMovies(searchMoviesUrl, apiKey, query, page, setTotalPages),
  });

  useEffect(() => {
    setPage(1);
  }, [query]);

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  return (
    <Container>
      <h1>Results for: {query}</h1>
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
