import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchbar/Searchbar";
import MovieList from "../components/lists/MovieList.jsx";

function Movies() {
  return (
    <div className="layout">
      <h1 className="recommended__heading">Movies Page</h1>
      <Header />
      <SearchBar
        labelText="Search for movies"
        placeholderText="Search for movies"
      />
      <main>
        <section className="movies">
          <MovieList />
        </section>
      </main>
    </div>
  );
}

export default Movies;
