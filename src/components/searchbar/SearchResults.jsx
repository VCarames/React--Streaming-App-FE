import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul className="thumbnail__list" role="list">
      {results.map((result) => (
        <li className="thumbnail" key={result.title} role="listitem">
          <picture className="thumbnail__picture">
            <source
              media="(min-width: 1000px)"
              srcSet={result.thumbnail.regular.large}
            />
            <source
              media="(min-width: 760px)"
              srcSet={result.thumbnail.regular.medium}
            />
            <img
              src={result.thumbnail.regular.small}
              alt={`${result.title} thumbnail`}
            />
          </picture>
          <div className="thumbnail__content">
            <button className="thumbnail__bookmark">
              {result.isBookmarked ? (
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
            <div className="thumbnail__category--info">
              <p className="thumbnail__year">{result.year}</p>
              <div className="thumbnail__container--category">
                <img src={result.icon} alt="" />
                <p className="thumbnail__category">{result.category}</p>
              </div>
              <p className="thumbnail__rating">{result.rating}</p>
            </div>
            <h3 className="thumbnail__heading">
              <a
                className="thumbnail__link"
                href={result.category === "Movie" ? "/movies" : "/tv-series"}
              >
                {result.title}
              </a>
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
