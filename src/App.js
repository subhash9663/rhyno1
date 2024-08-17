import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails
import CompareAll from './components/CompareAll';
import PreBook from './components/PreBook';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Rentals from './components/Rentals';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} /> {/* Add this route */}
        <Route path="/compare-all" element={<CompareAll />} />
        <Route path="/pre-book-now" element={<PreBook />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
