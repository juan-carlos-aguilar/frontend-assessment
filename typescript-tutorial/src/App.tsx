import React from 'react';
import './App.css';
// Import Components
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
