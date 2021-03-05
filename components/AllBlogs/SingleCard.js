import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const SingleCard = ({ title, category, updatedAt, url, shortDescription }) => {
  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font ">{category}</span>
          <span className="mt-1 text-gray-500 text-sm">{updatedAt}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium title-font mb-2">{title}</h2>
          <p className="leading-relaxed">{shortDescription}</p>
          <div className="text-indigo-500 inline-flex items-center mt-4">
            <Link href={url}>
              <a>See More Details</a>
            </Link>

            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

SingleCard.defaultProps = {
  title: "",
  category: "",
  createdAt: "",
  url: "",
  shortDescription: "",
};

SingleCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default SingleCard;
