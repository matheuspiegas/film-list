import { Container } from "../../Styles/reusableStyles";
import { Pagination } from "../Pagination";
import { Movies } from "../Movies";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Home = () => {
  const apiUrl = import.meta.env.VITE_API_POPULAR;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchDiscover = async (page) => {
    const response = await fetch(`${apiUrl}${page}`);
    const data = await response.json();
    setTotalPages(data.total_pages);
    return data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["discover", { page }],
    queryFn: () => fetchDiscover(page),
  });

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    page === totalPages ? setPage(page) : setPage(page + 1);
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
