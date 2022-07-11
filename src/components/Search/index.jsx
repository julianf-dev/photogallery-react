import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./search.module.scss";

export const Search = () => {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    setSearch(value);
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.form__boxestype}
          type="text"
          placeholder="Search some photos..."
        />
        <button className={style.form__boxestype} type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};
