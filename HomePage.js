import React from 'react';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <h2>Welcome to the Lung Cancer Detection System</h2>
        <p>Use this tool to upload CT scans for lung cancer analysis.</p>
      </div>
    </div>
  );
};

export default HomePage;