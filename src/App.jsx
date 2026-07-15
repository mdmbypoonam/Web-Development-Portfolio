import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header element locks dynamically at the top */}
      <Header />
      
      {/* Dynamic Main Section */}
      <main style={{ marginTop: '80px' }}> {/* Pushes project display below fixed header */}
        <Projects />
      </main>
      
      {/* Footer element remains fixed at bottom of page flow */}
      <Footer />
    </div>
  );
}

export default App;