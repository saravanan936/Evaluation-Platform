import React from 'react';
import { useSelector } from 'react-redux';

import CourseworkCard from './CourseworkCard'; // Adjust the path as needed

// CourseworkList Component
const CourseworkList = () => {
  const { files } = useSelector((state) => state.coursework);

  return (
    <div className="space-y-4" style={{ marginTop: '24px', marginBottom: '24px' }}>
      {/* Title */}
      <label htmlFor="title" className="block text-lg font-medium text-gray-700">My Coursework</label>

      {/* Grid Layout for Coursework Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {files.map((file, index) => (
          <CourseworkCard
            key={index}
            title={file.metadata?.title || 'Untitled Coursework'}
            description={file.metadata?.description || 'No description available.'}
            words={file.metadata?.wordCount || 'N/A'}
            time={file.metadata?.time || 'N/A'}
            rating={file.metadata?.rating || 0}
            language={file.metadata?.language || 'Unknown'}
          />
        ))}
      </div>

      {/* "View All" Button */}
      <div className="flex justify-center mt-4">
        <button
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md"
          onClick={() => console.log('View All button clicked!')} // Replace with actual logic
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default CourseworkList;
