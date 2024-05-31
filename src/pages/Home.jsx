import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/Searchbar";

function Home() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for movies or TV series"
        placeholderText="Search for movies or TV series"
      />
    </div>
  );
}

export default Home;
