import React, { Component } from 'react';
import Button from './CalcButton.js';
import Display from './Display.js';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props)
    this.state={value: 0}
    this.updateDisplay = this.updateDisplay.bind(this)
  	}
  	updateDisplay(valueOfButton){
  		this.setState({
  			value: this.state.value+valueOfButton.toString()
  		})
  	}

	renderButton(valueOfButton){
		return (
			<Button value={valueOfButton} 
			updateDisplay= {this.updateDisplay}
			/>
		)
	}
	render() {
   		return (
   		  <div className="App">
   		  	<Display value={this.state.value}/>
   		  	{this.renderButton('CE')}
   		  	{this.renderButton('C')}
   		    {this.renderButton('<=')}
   		  	{this.renderButton('÷')}
   		  	{this.renderButton(7)}
   		  	{this.renderButton(8)}
   		  	{this.renderButton(9)}
   		  	{this.renderButton('X')}
   		  	{this.renderButton(4)}
   		  	{this.renderButton(5)}
   		  	{this.renderButton(6)}
   		  	{this.renderButton('-')}
   		  	{this.renderButton(1)}
   		  	{this.renderButton(2)}
   		  	{this.renderButton(3)}
   		  	{this.renderButton('+')}
   		  	{this.renderButton('+/-')}
   		  	{this.renderButton(0)}
   		  	{this.renderButton('.')}
   		  	{this.renderButton('=')}
   		  </div>
   		);
  }
}



export default App;

