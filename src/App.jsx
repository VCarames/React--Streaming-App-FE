import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchProvider } from "/src/components/searchbar/SearchContext.jsx";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TVSeries />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
