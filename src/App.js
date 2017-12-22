import React, { Component } from 'react';
import NumberButton from './NumberButton.js';
import Display from './Display.js';
import './App.css';
class App extends Component {
	constructor(props) {
    super(props)
    this.state={
    	displayedValue: '0',
    	dotPressed: false,
    	operatorActive: false
    	}
    this.updateDisplay = this.updateDisplay.bind(this)
  	}
  	updateDisplay(valueOfButton){
  		var cannotAddDot= this.state.dotPressed && valueOfButton==='.'
  		if (cannotAddDot) {
  			return
  		}
  		if (valueOfButton==='+/-') {
  			if (this.state.displayedValue.toString().includes('-')) {
  				this.setState({
  					displayedValue: this.state.displayedValue.replace('-','')
  				})
  				return
  			}
  			else{
  				this.setState({
  					displayedValue: '-'+this.state.displayedValue
  				})
  				return
  			}
  		}
  		if (valueOfButton==='.') {
  			this.setState({
  				dotPressed: true
  			})
  		}
  		if (!this.state.operatorActive) {
  		if (this.state.displayedValue.length<16) {
  			if (this.state.displayedValue==='0') {
  				this.setState({
  				displayedValue: valueOfButton.toString()
  				})
  			}
  			else{
  				this.setState({
  				displayedValue: this.state.displayedValue+valueOfButton.toString()
  				})
  			}
  		}
  		}
  	}

	renderNumberButton(valueOfButton){
		return (
			<NumberButton value={valueOfButton} 
			updateDisplay= {this.updateDisplay}
			/>
		)
	}
	renderActionButton(valueOfButton){
		return (
			<NumberButton value={valueOfButton} 
			/>
		)
	}
	render() {
   		return (
   		  <div className="App">
   		  	<Display value={this.state.displayedValue}/>
   		  	{this.renderActionButton('CE')}
   		  	{this.renderActionButton('C')}
   		    {this.renderActionButton('<=')}
   		  	{this.renderActionButton('÷')}
   		  	{this.renderNumberButton(7)}
   		  	{this.renderNumberButton(8)}
   		  	{this.renderNumberButton(9)}
   		  	{this.renderActionButton('X')}
   		  	{this.renderNumberButton(4)}
   		  	{this.renderNumberButton(5)}
   		  	{this.renderNumberButton(6)}
   		  	{this.renderActionButton('-')}
   		  	{this.renderNumberButton(1)}
   		  	{this.renderNumberButton(2)}
   		  	{this.renderNumberButton(3)}
   		  	{this.renderActionButton('+')}
   		  	{this.renderNumberButton('+/-')}
   		  	{this.renderNumberButton(0)}
   		  	{this.renderNumberButton('.')}
   		  	{this.renderActionButton('=')}
   		  </div>
   		);
  }
}



export default App;

