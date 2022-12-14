import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./store";
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </Provider>
  </React.StrictMode>
);

