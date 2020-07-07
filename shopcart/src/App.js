import React from 'react';
// import logo from './logo.svg';
import Main from './components/MainComponent';
import {BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import './App.css';

const store=ConfigureStore();

const history = createBrowserHistory();

function App() {
  return (  
    <Provider store={store}>
    <BrowserRouter history={history}>
    <div className="App">
    <Main />
    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;


//Rotating Logo code className="App-logo" is responsible
// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>