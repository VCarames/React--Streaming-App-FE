import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/Searchbar";
import Trending from "../components/trending/Trending";
import Recommended from "../components/recommended/Recommended";

function Home() {
  return (
    <div className="layout">
      <h1 className="visually-hidden">Home Page</h1>
      <Header />
      <SearchBar
        labelText="Search for movies or TV series"
        placeholderText="Search for movies or TV series"
      />
      <main>
        <Trending />
        <Recommended />
      </main>
    </div>
  );
}

export default Home;
