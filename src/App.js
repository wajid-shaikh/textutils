import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
          msg : message,
          type: type,
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const removeBodyClasses = ()=>{
      document.body.classList.remove('bg-primary')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white';
        document.title = 'TextUtils - Dark Mode Enabled'
        showAlert("Light Mode has been Enabled", "success")
      }
      else{
        setMode('dark')
        document.body.style.backgroundColor = '#190654';
        document.title = 'TextUtils - Light Mode Enabled'
        showAlert("Dark Mode has been Enabled", "success")
      }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
            {/* <About mode={mode} /> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert} />
      {/* <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert} />
          </Route>
        </Switch>
      </Router> */}
   </>
  );
}

export default App;