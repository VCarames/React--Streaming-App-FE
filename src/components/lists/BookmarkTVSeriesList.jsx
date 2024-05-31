import React from "react";
import mediaData from "/public/data/media.json";
import { Link } from "react-router-dom";

function BookmarkTVSeriesList() {
  const bookmarkedTVShows = mediaData.filter(
    (item) => item.isBookmarked && item.category === "TV Series"
  );

  return (
    <div className="bookmark">
      <h3 className="bookmark__heading">Bookmarked TV Shows</h3>
      <ul className="thumbnail__list" role="list">
        {bookmarkedTVShows.map((tvShow) => (
          <li className="thumbnail" key={tvShow.title} role="listitem">
            <picture className="thumbnail__picture">
              <source
                media="(min-width: 1000px)"
                srcSet={tvShow.thumbnail.regular.large}
              />
              <source
                media="(min-width: 760px)"
                srcSet={tvShow.thumbnail.regular.medium}
              />
              <img
                src={tvShow.thumbnail.regular.small}
                alt={`${tvShow.title} thumbnail`}
              />
            </picture>
            <div className="thumbnail__content">
              <button className="thumbnail__bookmark">
                {tvShow.isBookmarked ? (
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
                <p className="thumbnail-year">{tvShow.year}</p>
                <div className="thumbnail__container--category">
                  <img src={tvShow.icon} alt="" />
                  <p className="thumbnail__category">{tvShow.category}</p>
                </div>
                <p className="thumbnail__rating">{tvShow.rating}</p>
              </div>
              <h3 className="thumbnail__heading">
                <Link
                  className="thumbnail__link"
                  to={
                    tvShow.category === "TV Series" ? "/tv-series" : "/movies"
                  }
                >
                  {tvShow.title}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkTVSeriesList;
