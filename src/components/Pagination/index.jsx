import P from "prop-types";

import * as Styled from "./styles";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export const Pagination = ({
  page,
  setPage,
  totalPages,
  nextPage,
  prevPage,
}) => {
  return (
    <Styled.ContainerPagination>
      <Styled.Pages>
        <p>{page}</p>
        <p>{totalPages}</p>
      </Styled.Pages>
      <Styled.PagesControl>
        <button
          onClick={() => prevPage(page, setPage)}
          disabled={page === 1 ? true : false}
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={() => nextPage(page, setPage, totalPages)}
          disabled={page === totalPages ? true : false}
        >
          <GrFormNext />
        </button>
      </Styled.PagesControl>
    </Styled.ContainerPagination>
  );
};

Pagination.propTypes = {
  page: P.number.isRequired,
  setPage: P.func.isRequired,
  totalPages: P.number.isRequired,
  nextPage: P.func.isRequired,
  prevPage: P.func.isRequired,
};
