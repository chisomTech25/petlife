import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WelcomePage, LoginPage, RegisterPage } from './pages/AuthPages';
import Homepage from './pages/Homepage';
import AnimalsPage from './pages/AnimalsPage';
import AnimalDetailPage from './pages/AnimalDetailPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CareGuidesPage from './pages/CareGuidesPage';
import AdoptionPage from './pages/AdoptionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  
  // Hide Navbar and Footer on auth pages
  const isAuthPage = ['/welcome', '/login', '/register'].includes(location.pathname);

  return (
    <div className="app">
      {!isAuthPage && <Navbar />}
      
      <main>
        <Routes>
          {/* Auth Routes */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Main App Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/animals/:id" element={<AnimalDetailPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/care-guides" element={<CareGuidesPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;