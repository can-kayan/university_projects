import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Const from './components/js/App';
import Footer from './components/js/Footer';
import Card from './components/js/Card';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Const />
    
    <Card/>
    
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
