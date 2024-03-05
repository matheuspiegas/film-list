import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container } from "../../Styles/reusableStyles";
import { Pagination } from "../Pagination";
import { Movies } from "../Movies";

export const SearchPage = () => {
  const [q] = useSearchParams();
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const query = q.get("query");
  const apiurl = import.meta.env.VITE_API_SEARCH;

  const fetchSearch = async (query, page) => {
    const response = await fetch(`${apiurl}${query}&page=${page}`);
    const data = await response.json();
    setTotalPages(data.total_pages);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["search", { query, page }],
    queryFn: () => fetchSearch(query, page),
  });

  useEffect(() => {
    setPage(1);
  }, [query]);

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    page === totalPages ? setPage(page) : setPage(page + 1);
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
