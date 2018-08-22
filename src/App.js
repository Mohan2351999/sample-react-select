import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"

class App extends Component {
  render() {
    return (

      <div className="App">
          <div className='rowC'>

              <p>The 1. jbjbdicjvdcx                     </p>

              <p className="space">The 2. EBFJCHBSJDBVC</p>

               <p className="space">The 3. jbjbdicjvdcx                     </p> <p className="space">The 4. jbjbdicjvdcx                     </p>

            <FirstComponent/>
          <SecondComponent/>
          </div>
            </div>
    );
  }
}

export default App;
