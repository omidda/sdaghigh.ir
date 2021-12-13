import React, {useContext}  from 'react';
import './App.css';
import Header from "./components/layout/Header"
import { ThemeContext } from './ContextPC';


function App() {
 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.mode;
  console.log(' THEME ' + darkMode);
  return (
    <div className={`bg ${darkMode === "dark" ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode  === "dark" ? "heading-dark" : "heading-light"}`}>
        {darkMode  === "dark" ? "Dark Mode" : "Light Mode"}
      </h1>
      <p className={`para ${darkMode  === "dark" ? "para-dark" : "para-light"}`}>
        TEST APP
        <Header title={"TEST TITLE"} />
      </p>
    
    </div>
  );
}

export default App;
