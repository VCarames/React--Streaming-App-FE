import React from "react";
import mediaData from "/public/data/media.json";
import { Link } from "react-router-dom";

function BookmarkMovieList() {
  const bookmarkedMovies = mediaData.filter(
    (item) => item.isBookmarked && item.category === "Movie"
  );

  return (
    <div className="bookmark">
      <h2 className="bookmark__heading">Bookmarked Movies</h2>
      <ul className="thumbnail__list" role="list">
        {bookmarkedMovies.map((movie) => (
          <li className="thumbnail" key={movie.title} role="listitem">
            <Link
              className="thumbnail__link"
              to={movie.category === "Movie" ? "/movies" : "/tv-series"}
              aria-label={`${movie.title} thumbnail`}
            >
              <picture className="thumbnail__picture">
                <source
                  media="(min-width: 1000px)"
                  srcSet={movie.thumbnail.regular.large}
                />
                <source
                  media="(min-width: 760px)"
                  srcSet={movie.thumbnail.regular.medium}
                />
                <img src={movie.thumbnail.regular.small} alt="" />
              </picture>
            </Link>
            <div className="thumbnail__content">
              <button className="thumbnail__bookmark">
                {movie.isBookmarked ? (
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
                <p className="thumbnail-year">{movie.year}</p>
                <div className="thumbnail__container--category">
                  <img src={movie.icon} alt="" />
                  <p className="thumbnail__category">{movie.category}</p>
                </div>
                <p className="thumbnail__rating">{movie.rating}</p>
              </div>
              <h3 className="thumbnail__heading">
                <Link
                  className="thumbnail__heading--link"
                  to={movie.category === "Movie" ? "/movies" : "/tv-series"}
                >
                  {movie.title}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkMovieList;
