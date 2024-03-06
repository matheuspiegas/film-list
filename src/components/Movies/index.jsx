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
        data.results.map((movie) => (
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
