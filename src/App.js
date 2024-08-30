import React from 'react';
import './index.css';  // Make sure this imports Tailwind
import ToDo from './components/box';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToDo />
    </div>
  );
}

export default App;
