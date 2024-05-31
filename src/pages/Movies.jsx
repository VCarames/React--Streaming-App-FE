import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchbar/Searchbar";
import MovieList from "../components/lists/MovieList.jsx";

function Movies() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for movies"
        placeholderText="Search for movies"
      />
      <main>
        <section className="recommended">
          <h2 className="recommended__heading">Movies</h2>
          <MovieList />
        </section>
      </main>
    </div>
  );
}

export default Movies;
