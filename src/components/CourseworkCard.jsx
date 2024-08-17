// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CourseworkCard = ({ title, description, words, rating, time, language }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white max-w-sm mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span className="mr-2">{words} words</span>
        <span className="mx-2">•</span>
        <span className="mr-2">{time}</span>
        <span className="mx-2">•</span>
        <span className="mr-2">⭐ {rating}/7</span>
        <span className="mx-2">•</span>
        <span>{language}</span>
      </div>
    </div>
  );
};

// Define prop types for better validation and error checking
CourseworkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  words: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number,
  time: PropTypes.string,
  language: PropTypes.string,
};

// Default props in case some props are not passed
CourseworkCard.defaultProps = {
  description: 'No description available.',
  words: 'N/A',
  rating: 0,
  time: 'N/A',
  language: 'Unknown',
};

export default CourseworkCard;
