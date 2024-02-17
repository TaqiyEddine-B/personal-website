import logo from './logo.svg';
import './styles/global.css';

import React from 'react';
import Home from './components/home';
import Blog from './components/blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const NotFound = () => (
    <div>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;