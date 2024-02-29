import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    navigate(`/search?query=${value}`);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit}>
        <input type="search" value={value} onChange={handleChange} />
        <button>
          <IoSearch />
        </button>
      </form>
    </Styled.Container>
  );
};
