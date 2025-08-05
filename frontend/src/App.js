import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2 className="logo"><span style={{color:'#6a11cb'}}>Intern</span>Portal</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Apply</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} InternPortal. All Rights Reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;
