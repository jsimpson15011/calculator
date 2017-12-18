import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import Button from './CalcButton.js';
import Display from './Display.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Display />
      	<Button buttonText= 'CE'/>
      	<Button buttonText= 'C'/>
        <Button buttonText= '<='/>
      	<Button buttonText= '÷'/>
      	<Button buttonText= {7}/>
      	<Button buttonText= {8}/>
      	<Button buttonText= {9}/>
      	<Button buttonText= 'X'/>
      	<Button buttonText= {4}/>
      	<Button buttonText= {5}/>
      	<Button buttonText= {6}/>
      	<Button buttonText= '-'/>
      	<Button buttonText= {1}/>
      	<Button buttonText= {2}/>
      	<Button buttonText= {3}/>
      	<Button buttonText= '+'/>
      	<Button buttonText= '+/-'/>
      	<Button buttonText= {0}/>
      	<Button buttonText= '.'/>
      	<Button buttonText= '='/>
      </div>
    );
  }
}



export default App;

