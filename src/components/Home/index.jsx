import P from "prop-types";
import * as Styled from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export const Home = () => {
  const apiUrl = import.meta.env.VITE_API_POPULAR;
  const movieInfo = import.meta.env.VITE_MOVIE_INFO;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imgUrl = import.meta.env.VITE_IMG_URL;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchDiscover = async () => {
    const response = await fetch(`${apiUrl}${page}`);
    const data = await response.json();
    setTotalPages(data.total_pages);
    return data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["discover", { page }],
    queryFn: fetchDiscover,
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
      <h1>Popular Movies</h1>
      <Styled.ContainerMovies>
        {!isLoading &&
          data.results.map((m) => (
            <Styled.MovieCard key={m.id}>
              <Link to={`${movieInfo}${m.id}?${apiKey}`}>
                <img src={`${imgUrl}${m.poster_path}`} alt="" />
                <h3>{m.title}</h3>
              </Link>
            </Styled.MovieCard>
          ))}
        {isError && <p>Ocorreu um erro.</p>}
      </Styled.ContainerMovies>
      <Styled.ContainerPagination>
        {!isLoading && (
          <Styled.ContainerPages>
            <p>{page}</p>
            <p>{data.total_pages}</p>
          </Styled.ContainerPages>
        )}
        <Styled.ContainerButtons>
          <button onClick={prevPage}>
            <GrFormPrevious />
          </button>
          <button onClick={nextPage}>
            <GrFormNext />
          </button>
        </Styled.ContainerButtons>
      </Styled.ContainerPagination>
    </Styled.Container>
  );
};
