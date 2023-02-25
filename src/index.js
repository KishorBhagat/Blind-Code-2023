import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QuestionContextProvider } from './Context/QuestionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuestionContextProvider>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </QuestionContextProvider>
);

