import React from "react";
import { Link } from "react-router-dom";
import mediaData from "/public/data/media.json";

function RecommendedList() {
  const recommendedItems = mediaData.filter((item) => !item.isRecommended);

  return (
    <>
      <ul className="thumbnail__list" role="list">
        {recommendedItems.map((recommend) => (
          <li className="thumbnail" key={recommend.title} role="listitem">
            <Link
              className="thumbnail__link"
              to={recommend.category === "Movie" ? "/movies" : "/tv-series"}
              aria-label={`${recommend.title} thumbnail`}
            >
              <picture className="thumbnail__picture">
                <source
                  media="(min-width: 1000px)"
                  srcSet={recommend.thumbnail.regular.large}
                />
                <source
                  media="(min-width: 760px)"
                  srcSet={recommend.thumbnail.regular.medium}
                />
                <img src={recommend.thumbnail.regular.small} alt="" />
              </picture>
            </Link>
            <div className="thumbnail__content">
              <button className="thumbnail__bookmark">
                {recommend.isBookmarked ? (
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
                <p className="thumbnail__year">{recommend.year}</p>
                <div className="thumbnail__container--category">
                  <img
                    className="icon--thumbnail"
                    src={recommend.icon}
                    alt=""
                  />
                  <p className="thumbnail__category">{recommend.category}</p>
                </div>
                <p className="thumbnail__rating">{recommend.rating}</p>
              </div>
              <h3 className="thumbnail__heading">
                <Link
                  className="thumbnail__heading--link"
                  to={recommend.category === "Movie" ? "/movies" : "/tv-series"}
                >
                  {recommend.title}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecommendedList;
