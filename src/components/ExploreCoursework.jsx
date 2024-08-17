import { useState } from 'react';
import PropTypes from 'prop-types';
import CourseworkCard from './CourseworkCard';

function ExploreCoursework({ examples = {} }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const allExamples = Object.values(examples).flat();

  return (
    <div className="space-y-6" style={{ marginTop: '24px', marginRight: '16px', marginBottom: '24px' }}>
      {/* Tabbed Interface */}
      <label htmlFor="title" className="block text-lg font-medium text-gray-700">Explore Coursework</label>
      <div className="flex space-x-4" style={{ marginLeft: '16px', marginTop: '16px', marginRight: '16px', marginBottom: '16px' }}>
        {/* Hardcoded Buttons for Specific Categories */}
        {['All', 'IA Example', 'EE Example', 'IO Example', 'TOK Example'].map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 border rounded-md transition font-bold ${
              selectedCategory === category ? 'bg-white text-purple-600 border-purple-500' : 'bg-white text-purple-600 border border-gray-300 hover:border-purple-300'
            }`}
            style={{ marginLeft: '16px', marginTop: '8px', marginRight: '16px', marginBottom: '8px' }}
          >
            {category}
          </button>
        ))}
        {/* Dynamic Buttons for Other Categories */}
        {Object.keys(examples).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 border rounded-md transition font-bold ${
              selectedCategory === category ? 'bg-white text-purple-600 border-purple-500' : 'bg-white text-purple-600 border border-gray-300 hover:border-purple-300'
            }`}
            style={{ marginLeft: '16px', marginTop: '8px', marginRight: '16px', marginBottom: '8px' }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout for Coursework Examples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {(selectedCategory === 'All' ? allExamples : examples[selectedCategory] || []).map((example, index) => (
          <CourseworkCard
            key={index}
            title={example.title || 'Untitled'}
            description={example.description || 'No description available.'}
            words={example.wordCount || 'N/A'}
            rating={example.rating || 0}
            time={example.time || 'N/A'}
            language={example.language || 'Unknown'}
          />
        ))}
      </div>
    </div>
  );
}

// PropTypes for validation
ExploreCoursework.propTypes = {
  examples: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        wordCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        rating: PropTypes.number,
        time: PropTypes.string,
        language: PropTypes.string,
      })
    )
  ),
};

// Default props to avoid undefined or null values
ExploreCoursework.defaultProps = {
  examples: {},
};

export default ExploreCoursework;
