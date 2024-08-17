import { Route, Routes } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import CourseworkForm from './components/CourseworkForm';
import CourseworkList from './components/CourseworkList';
import ExploreCoursework from './components/ExploreCoursework';
import EvaluationDisplay from './components/EvaluationDisplay';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 style={{ marginBottom: '24px',marginLeft:'75px'}}>
        {/* Black bold text */}
        <h2 style={{ fontWeight: 'bold', color: 'black' }}>
          Hey IB Folks! Unsure about the quality of 
          <span>your answers?</span> 
        </h2>
        {/* Purple text */}
        <h3 style={{fontWeight: 'bold', color: 'purple' }}> We get you.</h3>
      </h1>
      <Routes>
        {/* Page 1 */}
        <Route 
          path="/" 
          element={
            <div className=''>
              <div 
                className='border border-black rounded p-4 bg-gray-100'
                style={{ 
                  border: '2px solid grey', 
                  borderRadius: '8px', 
                  padding: '8px', 
                  backgroundColor: 'white', 
                  width: '500px', 
                  marginLeft:'75px'
                }}
              >
                <FileUpload />
                <CourseworkForm />
              </div>
              <div>
                <CourseworkList />
                <ExploreCoursework />
              </div>
            </div>
          } 
        />
        
        {/* Page 2 */}
        <Route path="/evaluation-display" element={<EvaluationDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
