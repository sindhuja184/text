import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg :message,
      type :type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is set", "success");
      document.title = 'Textty Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is set", "success");
      document.title = 'Textty Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextConverter" aboutText='About' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path= '/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
