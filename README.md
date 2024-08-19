# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**List of Implemented Features**
**Features:**

**File Upload:**
  Drag-and-drop functionality for PDF files.
  Manual file upload option.
  File size limit displayed (e.g., "Limit 25 MB per file").
  
**Local Storage Implementation:**
  Save uploaded files and their metadata locally.
  Ensure data persistence across page reloads.
  
**Coursework Details Form:**
  Dropdowns for "Coursework Type" and "Subject".
  Text input for essay title.
  
**Evaluation Display:**
  Overall score with a circular progress indicator.
  Breakdown of scores by criteria (A, B, C).

**Coursework List:**
  Display previously uploaded coursework from local storage.
  Showtitle, subject, word count, and other relevant details for each item
**Explore Coursework Section:**
  Tabbed interface for different coursework categories.
  Grid layout for coursework examples.

**Challenges Faced and How They Were Overcome**

**1. Integrating MSW for Mock API Calls**
  Challenge:Integrating MSW for mocking API requests and responses was more complex than anticipated. Initial setup issues included configuring handlers and ensuring that mock responses     were properly intercepted during development and testing.
  
  Solution:Setup Configuration: Ensured that MSW was properly installed and configured. This involved creating a src/mocks/browser.js file to set up service worker and handlers.
  
  Handlers Definition: Defined mock handlers in src/mocks/handlers.js and made sure they accurately represent the endpoints and responses expected by the application.
  
  Network Requests: Updated application code to correctly use MSW for intercepting network requests, ensuring that mock responses were returned instead of hitting actual APIs.
  
  Testing: Verified that MSW was functioning correctly by running the application and checking that mock data was used during development. Added unit tests to ensure mocks were properly applied.

