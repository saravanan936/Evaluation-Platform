// src/index.js or src/main.jsx
// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store'; // Ensure this path is correct
import App from './App';
/**import { worker } from './mocks/browser';**/

// Start the mock service worker
/**worker.start();**/

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
