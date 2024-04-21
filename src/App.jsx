// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Navbar from "./Navbar/Navbar.jsx";
import HomePage from "./pages/index.jsx";
import Footer from "./Footer/Footer.jsx";
import OrganizerPage from "./OrganizerPage/OrganizerPage.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organizer" element={<OrganizerPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;