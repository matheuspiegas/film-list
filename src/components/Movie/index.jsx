import { useQuery } from "@tanstack/react-query";
import * as Styled from "./styles";
import { useParams } from "react-router-dom";
import noImage from "../../assets/no-image.jpg";
import { getMovieInfo } from "../../utils/fetchs";

export const Movie = () => {
  const movieInfoUrl = import.meta.env.VITE_MOVIE_INFO_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  const { movieId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieInfo", { movieId }],
    queryFn: () => getMovieInfo(movieInfoUrl, apiKey, movieId),
  });

  return (
    <Styled.ContainerMovie>
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Algo deu errado!</p>}
      {data && data.title && (
        <div>
          <img
            src={data.poster_path ? `${imgUrl}${data.poster_path}` : noImage}
            alt=""
          />
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
        </div>
      )}
    </Styled.ContainerMovie>
  );
};
