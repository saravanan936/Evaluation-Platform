import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  'Mathematics',
  'Science',
  'History',
  'Geography',
  'Literature',
  'Art',
  'Computer Science',
  'Other',
];

const courseworkTypes = [
  'Essay',
  'Project',
  'Report',
  'Presentation',
  'Research Paper',
  'Other',
];

function CourseworkForm() {
  const [formData, setFormData] = useState({
    subject: '',
    courseworkType: '',
    title: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Evaluation Result:', data);
      setResult(data);

      // Debugging log
      console.log('Navigating to /evaluation-display');
      navigate('/evaluation-display');
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred while evaluating your coursework. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {result && <p className="text-green-500">Result: {JSON.stringify(result)}</p>}

      <div className="flex flex-col space-y-4">
        <label htmlFor="courseworkType" className="block text-sm font-medium text-gray-700" style={{
          marginTop:"8px",
          marginLeft:"8px"
        }}>
          Select your courses & subjects*
        </label>
        <div className="flex space-x-4">
          <select
            id="courseworkType"
            name="courseworkType"
            value={formData.courseworkType}
            onChange={handleChange}
            className="block w-full p-3 rounded-md border border-gray-300 text-gray-700"
            required
            style={{marginLeft:"8px",
              width:"175px"
            }}
            
          >
            <option value="">Coursework Type</option>
            {courseworkTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block w-full p-3 rounded-md border border-gray-300 text-gray-700"
            required
            style={{marginLeft:"8px",
              width:"100px"
            }}
          >
            <option value="">Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700" style={{
          marginBottom:"8px",
          marginLeft:"8px"
        }}>
          Enter your essay title*(Required)
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full p-3 rounded-md border border-gray-300 text-gray-700"
          placeholder="how nations work....."
          style={{
            marginLeft:"8px",
            width:"300px"
          }}
          required
        />
      </div>

      <button
        type="submit"
        style={{marginLeft:"8px"}}
        className="bg-purple-700 text-white font-bold text-lg rounded-full px-8 py-3 mt-4 shadow-lg hover:bg-purple-600"
      >
        Evaluate your score
      </button>
    </form>
  );
}

export default CourseworkForm;
