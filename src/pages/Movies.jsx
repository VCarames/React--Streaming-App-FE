import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchbar/Searchbar";

function Movies() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for movies"
        placeholderText="Search for movies"
      />
    </div>
  );
}

export default Movies;
