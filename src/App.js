import React, { Component } from 'react';

import './App.module.css';
import Splash from './containers/Splash/Splash';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  state = {
    isAuth: false
  }
  
  render() {
    return (
      <div className="App">
        <Splash />
        {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
