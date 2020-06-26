import React from 'react';
// import logo from './logo.svg';
import Main from './components/MainComponent';
// import {BrowserRouter } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from 'history';

import './App.css';
const history = createBrowserHistory();

function App() {
  return (  
    <Router history={history}>
      <div className="App">
      <Main />
      </div>
      </Router>
  );
}

export default App;


//Rotating Logo code className="App-logo" is responsible
// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>