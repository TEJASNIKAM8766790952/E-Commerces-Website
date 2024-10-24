// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'; // Default import
import MenClothes from './Pages/MenClothes'; // Default import
import WomenClothes from './Pages/WomenClothes'; // Default import
import Electronics from './Pages/Electronics'; // Default import
import Shoes from './Pages/Shoes'; // Default import
import KidsWear from './Pages/KidsWear'; // Default import
import Toys from './Pages/Toys'; 
import Contact from './Pages/Contact'; 
import Login from '../src/Components/Login'; 
import SignUp from '../src/Components/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-clothes" element={<MenClothes />} />
          <Route path="/women-clothes" element={<WomenClothes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
