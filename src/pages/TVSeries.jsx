import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchbar/Searchbar";
import TVSeriesList from "../components/lists/TVSeriesList.jsx";

function TVSeries() {
  return (
    <div className="layout">
      <h1 className="tvseries__heading">TV Series Page</h1>
      <Header />
      <SearchBar
        labelText="Search for TV series"
        placeholderText="Search for TV series"
      />
      <main>
        <section className="tvseries">
          <TVSeriesList />
        </section>
      </main>
    </div>
  );
}

export default TVSeries;
