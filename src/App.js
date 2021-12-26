import React from 'react';
import './styles/main.css';
import UnitedStates from './components/UnitedStates';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <UnitedStates />
      <Footer />
    </div>
  );
}

export default App;
