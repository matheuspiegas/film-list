import * as Styled from "./styles";
import P from "prop-types";
import noImage from "../../assets/no-image.jpg";
import { Link } from "react-router-dom";

export const Movies = ({ data }) => {
  const movieInfo = import.meta.env.VITE_MOVIE_INFO;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imgUrl = import.meta.env.VITE_IMG_URL;

  return (
    <Styled.ContainerMovies>
      {data &&
        data.results &&
        data.results.map((movie) => (
          <Styled.MovieCard key={movie.id}>
            <Link to={`${movieInfo}${movie.id}?${apiKey}`}>
              <img
                src={
                  movie.poster_path ? `${imgUrl}${movie.poster_path}` : noImage
                }
                alt=""
              />
              <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
            </Link>
          </Styled.MovieCard>
        ))}
    </Styled.ContainerMovies>
  );
};

Movies.propTypes = {
  data: P.object,
};