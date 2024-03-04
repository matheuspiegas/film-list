import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

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
      <h1>Results for: {query}</h1>
      <Styled.ContainerMovies>
        {isLoading && <p>Carregando...</p>}
        {data &&
          movies.map((m) => (
            <Styled.MovieCard key={m.id}>
              <Link
                to={`https://api.themoviedb.org/3/movie/${m.id}?api_key=3af7189fc51b646e8f9b9b476d6fcbac`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                  alt=""
                />
                <h3>{m.title}</h3>
              </Link>
            </Styled.MovieCard>
          ))}
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
