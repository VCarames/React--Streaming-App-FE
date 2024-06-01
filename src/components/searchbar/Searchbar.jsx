import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "/src/components/searchbar/SearchContext.jsx";

const SearchBar = ({ labelText, placeholderText }) => {
  const [query, setQuery] = useState("");
  const { handleSearch } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    navigate("/search");
  };

  return (
    <div className="searchbar">
      <img
        className="searchbar__icon"
        src="src/assets/icons/icon-search.svg"
        alt=""
      />
      <form onSubmit={handleSubmit} className="searchbar__form">
        <label className="visually-hidden" htmlFor="search">
          {labelText}
        </label>
        <input
          className="searchbar__input"
          type="text"
          id="search"
          name="search"
          placeholder={placeholderText}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
