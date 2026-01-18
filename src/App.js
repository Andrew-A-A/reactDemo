import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react';
import Homepage from './Homepage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
