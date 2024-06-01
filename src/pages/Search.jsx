import React from "react";
import { useSearch } from "/src/components/searchbar/SearchContext.jsx";
import Header from "../components/header/Header";
import SearchBar from "/src/components/searchbar/Searchbar.jsx";
import SearchResults from "/src/components/searchbar/SearchResults.jsx";
import RecommendedList from "../components/recommended/RecommendedList";

const Search = () => {
  const { searchResults, searchQuery } = useSearch();

  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for movies or TV series"
        placeholderText="Search for movies or TV series"
      />
      <main>
        <section className="search">
          <h2 className="search__heading">
            Found {searchResults.length} results for {searchQuery}
          </h2>
          <SearchResults results={searchResults} />
        </section>
        <section className="recommended">
          <h2 className="recommended__heading">Recommended for you</h2>
          <RecommendedList />
        </section>
      </main>
    </div>
  );
};

export default Search;
