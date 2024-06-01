import React from "react";
import Header from "../components/header/Header";
import SearchBar from "/src/components/searchbar/Searchbar.jsx";

function Search() {
  return (
    <div>
      <div className="layout">
        <Header />
        <SearchBar
          labelText="Search for movies or TV series"
          placeholderText="Search for movies or TV series"
        />
        <main>
          <section className="search">
            <h2 className="search__heading"></h2>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Search;
