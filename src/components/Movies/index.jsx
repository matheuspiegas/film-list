import * as Styled from "./styles";
import P from "prop-types";
import noImage from "../../assets/no-image.jpg";
import { Link } from "react-router-dom";

export const Movies = ({ data }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  return (
    <Styled.ContainerMovies>
      {data &&
        data.results &&
        data.results.map((movie) => {
          let date = new Date(movie.release_date);
          let formatedDate = `${
            Number(date.toLocaleString("pt-BR", { day: "numeric" })) + 1
          } de ${date
            .toLocaleString("pt-BR", { month: "short" })
            .substring(-1, 3)} de ${date.toLocaleString("pt-BR", {
            year: "numeric",
          })}`;
          return (
            <Styled.MovieCard key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `${imageUrl}${movie.poster_path}`
                      : noImage
                  }
                  alt=""
                />
                <Styled.MovieInfo>
                  <h3>{movie.title}</h3>
                  <span>{formatedDate}</span>
                  <p>{movie.overview}</p>
                </Styled.MovieInfo>
              </Link>
            </Styled.MovieCard>
          );
        })}
    </Styled.ContainerMovies>
  );
};

Movies.propTypes = {
  data: P.object,
};
