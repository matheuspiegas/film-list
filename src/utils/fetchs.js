export const getPopularMovies = async (link, apiKey, page, setTotalPages) => {
  const response = await fetch(`${link}${apiKey}&page=${page}`);
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
  const response = await fetch(`${searchMoviesUrl}${query}&page=${page}&${apiKey}`);
  const data = await response.json();
  setTotalPages(data.total_pages);
  return data;
};
