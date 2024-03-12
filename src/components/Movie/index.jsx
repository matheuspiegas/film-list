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

  console.log(data);
  let date = "";
  if (data && data.release_date) {
    date = data.release_date;
  }

  return (
    <Styled.Container>
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Algo deu errado!</p>}
      {data && data.title && (
        <Styled.Card>
          <Styled.ContainerPoster>
            <Styled.Poster
              src={data.poster_path ? `${imgUrl}${data.poster_path}` : noImage}
              alt=""
            />
          </Styled.ContainerPoster>
          <Styled.ContainerInfo>
            <Styled.Info>
              <h2>
                {data.title} <span>({date.substring(0, 4)})</span>
              </h2>
              <h3>Sinopse: </h3>
              <p>{data.overview}</p>
            </Styled.Info>
          </Styled.ContainerInfo>
        </Styled.Card>
      )}
    </Styled.Container>
  );
};
