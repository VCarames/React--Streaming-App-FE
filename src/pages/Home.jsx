import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/Searchbar";
import Trending from "../components/trending/Trending";

function Home() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for movies or TV series"
        placeholderText="Search for movies or TV series"
      />
      <main>
        <Trending />
      </main>
    </div>
  );
}

export default Home;
