import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/Searchbar";
import BookmarkMovieList from "../components/lists/BookmarkMovieList.jsx";
import BookmarkTVSeriesList from "../components/lists/BookmarkTVSeriesList.jsx";

function Bookmarks() {
  return (
    <div className="layout">
      <Header />
      <SearchBar
        labelText="Search for bookmarked movies or TV series"
        placeholderText="Search for bookmarked movies or TV series"
      />
      <main>
        <section className="bookmark">
          <BookmarkMovieList />
          <BookmarkTVSeriesList />
        </section>
      </main>
    </div>
  );
}

export default Bookmarks;
