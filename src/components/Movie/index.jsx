import { useQuery } from "@tanstack/react-query";
import * as Styled from "./styles";
import { useParams } from "react-router-dom";
import noImage from "../../assets/no-image.jpg";

export const Movie = () => {
  const movieInfo = import.meta.env.VITE_MOVIE_INFO;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imgUrl = import.meta.env.VITE_IMG_URL;

  const { movieId } = useParams();

  const fetchMovie = async (movieId) => {
    const response = await fetch(`${movieInfo}${movieId}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieInfo", { movieId }],
    queryFn: () => fetchMovie(movieId),
  });

  //   console.log(data);

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
