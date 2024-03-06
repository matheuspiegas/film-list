export const prevPage = (page, setPage) => {
  setPage(Math.max(1, page - 1));
};

export const nextPage = (page, setPage, totalPages) => {
  setPage(Math.min(page + 1, totalPages));
};
