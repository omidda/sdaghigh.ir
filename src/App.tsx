import React  from 'react';
import './App.css';
import Header from "./components/layout/Header"
import { ThemeProvider } from './ContextPC';


function App() {
  
  let theme = {
    mode : 'dark',
    lang: 'EN'
  }

  return (
    <ThemeProvider value={theme}>
      <Header title={"WEB SITE TITLE"} />
    </ThemeProvider>
  );
}

export default App;
