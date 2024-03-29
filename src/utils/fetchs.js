export const getPopularMovies = async (
  popularMoviesUrl,
  apiKey,
  page,
  setTotalPages
) => {
  const response = await fetch(`${popularMoviesUrl}${apiKey}&page=${page}`);
  const data = await response.json();
  setTotalPages(data.total_pages);
  return data;
};

export const getSearchedMovies = async (
  searchMoviesUrl,
  apiKey,
  query,
  page,
  setTotalPages
) => {
  const response = await fetch(
    `${searchMoviesUrl}${query}&page=${page}&${apiKey}`
  );
  const data = await response.json();
  setTotalPages(data.total_pages);
  return data;
};

export const getMovieInfo = async (movieInfoUrl, apiKey, movieId) => {
  const response = await fetch(`${movieInfoUrl}${movieId}?${apiKey}`);
  const data = await response.json();
  return data;
};
