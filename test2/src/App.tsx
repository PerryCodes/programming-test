import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const now = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        ```Select a date time here```

        <p>
          Selected date time is: {now.toLocaleString()}
        </p>

      </header>
    </div>
  );
}

export default App;
