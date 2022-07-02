import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/AboutPage/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
        {/* NEST THESE ROUTES */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

