import React from "react";
import TrendingList from "./TrendingList";

function Trending() {
  return (
    <>
      <section className="trending">
        <h2 className="trending__heading">Trending</h2>
        <TrendingList />
      </section>
    </>
  );
}

export default Trending;
