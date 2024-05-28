import React from "react";

function Searchbar({ labelText, placeholderText }) {
  return (
    <div className="searchbar">
      <img
        className="searchbar__icon"
        src="src/assets/assets/icons/icon-search.svg"
        alt=""
      />
      <form className="searchbar__form">
        <label className="visually-hidden" htmlFor="search">
          {labelText}
        </label>
        <input
          className="searchbar__input"
          type="text"
          id="search"
          name="search"
          placeholder={placeholderText}
        />
      </form>
    </div>
  );
}

export default Searchbar;
