import React from 'react';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  console.log("✅ App loaded");
  return (
    <div style={{ background: '#000', height: '100vh' }}>
      <Navbar />
    </div>
  );
};

export default App;
