import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import the App component

//Create the root element
const root = createRoot(document.getElementById('root'));

// Render App into the root element
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);