import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function EvaluationDisplay() {
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvaluation = async () => {
      try {
        const response = await fetch('/api/evaluate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ file: 'example.pdf' }), // Adjust as necessary
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEvaluation(data);
        localStorage.setItem('evaluationResults', JSON.stringify(data)); // Store results locally
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvaluation();
  }, []);

  useEffect(() => {
    const storedEvaluation = localStorage.getItem('evaluationResults');
    if (storedEvaluation) {
      setEvaluation(JSON.parse(storedEvaluation));
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const scorePercentage = evaluation ? (evaluation.score / 7) * 100 : 0;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white max-w-sm mb-6">
      <h2 className="text-lg font-semibold mb-2">Evaluation Results</h2>
      {evaluation ? (
        <div>
          {/* Circular Progress Indicator */}
          <div className="mb-4" style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={scorePercentage}
              text={`${evaluation.score}`}
              styles={buildStyles({
                textColor: '#4a90e2',
                pathColor: '#4a90e2',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <p className="text-sm text-gray-600 mb-4">Breakdown:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
            <li>A: {evaluation.breakdown.A}</li>
            <li>B: {evaluation.breakdown.B}</li>
            <li>C: {evaluation.breakdown.C}</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">Date: {evaluation.date}</p>
        </div>
      ) : (
        <p>No evaluation data available.</p>
      )}
    </div>
  );
}

export default EvaluationDisplay;
