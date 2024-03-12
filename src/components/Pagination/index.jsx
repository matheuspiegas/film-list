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
        <Styled.ButtonPagination
          onClick={() => prevPage(page, setPage)}
          disabled={page === 1 ? true : false}
        >
          <GrFormPrevious />
        </Styled.ButtonPagination>
        <Styled.ButtonPagination
          onClick={() => nextPage(page, setPage, totalPages)}
          disabled={page === totalPages ? true : false}
        >
          <GrFormNext />
        </Styled.ButtonPagination>
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
