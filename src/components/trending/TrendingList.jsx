import React from "react";
import mediaData from "/public/data/media.json";
import { Link } from "react-router-dom";

function TrendingList() {
  const trendingItems = mediaData.filter((item) => item.isTrending);

  return (
    <>
      <ul className="thumbnail-trending__list" role="list">
        {trendingItems.map((trending) => (
          <li
            className="thumbnail-trending"
            key={trending.title}
            role="listitem"
          >
            <picture className="thumbnail-trending__picture">
              <source
                media="(min-width: 760px)"
                srcSet={trending.thumbnail.trending.large}
              />
              <img
                src={trending.thumbnail.trending.small}
                alt={`${trending.title} thumbnail`}
              />
            </picture>
            <div className="thumbnail-trending__container">
              <button className="thumbnail-trending__bookmark">
                {trending.isBookmarked ? (
                  <img
                    src="/src/assets/icons/icon-bookmark-full.svg"
                    alt="Bookmarked"
                  />
                ) : (
                  <img
                    src="/src/assets/icons/icon-bookmark-empty.svg"
                    alt="Not Bookmarked"
                  />
                )}
              </button>
              <div className="thumbnail-trending__container--info">
                <p className="thumbnail-trending__year">{trending.year}</p>
                <div className="thumbnail-trending__container--category">
                  <img src={trending.icon} alt="" />
                  <p className="thumbnail-trending__category">
                    {trending.category}
                  </p>
                </div>
                <p className="thumbnail-trending__rating">{trending.rating}</p>
              </div>
              <h3 className="thumbnail-trending__heading">
                <Link
                  to={trending.category === "Movie" ? "/movies" : "/tv-series"}
                  className="thumbnail-trending__link"
                >
                  {trending.title}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrendingList;
