import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Navbar from './components/Navbar/Navbar';


function App() {
  

  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    
      
  );
}

export default App;
