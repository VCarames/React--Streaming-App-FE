import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchbar/Searchbar";

function TVSeries() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for TV series"
        placeholderText="Search for TV series"
      />
    </div>
  );
}

export default TVSeries;
