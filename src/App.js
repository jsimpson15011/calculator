import React, { Component } from 'react';
import NumberButton from './NumberButton.js';
import ActionButton from './ActionButton.js';
import Display from './Display.js';
import './App.css';
class App extends Component {
	constructor(props) {
    super(props)
    this.state={
    	displayedValue: '0',
    	storedValue: undefined,
    	dotPressed: false,
    	operatorActive: false
    	}
    this.updateDisplay = this.updateDisplay.bind(this)
    this.actionButton = this.actionButton.bind(this)
  	}
  	actionButton(valueOfButton){
  		switch(valueOfButton){
  			case 'CE':
  			this.setState({
  				storedValue: undefined,
  				displayedValue: '0',
  				dotPressed: false
  			})
  			break;

  			case 'C':
  			this.setState({
  				displayedValue: '0',
  				dotPressed: false
  			})
  			break;

  			case '<=':
  			var lastDigitInDisplay= this.state.displayedValue.slice(-1)
  			var lengthOfDisplay= this.state.displayedValue.replace('-','').length
  			if (lengthOfDisplay===1) {
  				this.setState({
  					displayedValue: '0'
  				})
  				return
  			}
  			this.setState({
  				displayedValue: this.state.displayedValue.replace(/.$/,'')
  			})
  			if (lastDigitInDisplay==='.') {
  				this.setState({
  					dotPressed: false
  				})
  			}
  			break;
  			
  			default:
  			return;
  		}
  	}
  	updateDisplay(valueOfButton){
  		if (valueOfButton==='+/-') {
  			if (this.state.displayedValue.toString().includes('-')) {
  				this.setState({
  					displayedValue: this.state.displayedValue.replace('-','')
  				})
  				return
  			}
  			if(this.state.displayedValue!=='0'&&this.state.displayedValue!=='0.'){
  				this.setState({
  					displayedValue: '-'+this.state.displayedValue
  				})
  				return
  			}
  			else{
  				return
  			}
  		}
  		if (valueOfButton==='.') {
  			if (this.state.dotPressed) {
  				return
  			}
  			this.setState({
  				dotPressed: true
  			})
  			if (this.state.displayedValue==='0') {
  				this.setState({
  					displayedValue: '0.'
  				})
  				return
  			}
  			else{
  				this.setState({
  					displayedValue: this.state.displayedValue+valueOfButton.toString()
  				})
  			}
  		}
  		if (!this.state.operatorActive) {
  		if (this.state.displayedValue.length<16) {
  			if (this.state.displayedValue==='0') {
  				if (this.state.displayedValue==='0') {
  					this.setState({
  					displayedValue: valueOfButton.toString()
  					})
  				}
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
	renderActionButton(valueOfButton,color){
		return (
			<ActionButton value={valueOfButton}
			actionButton= {this.actionButton} 
			color= {color}
			/>
		)
	}
	render() {
   		return (
   		  <div className="App">
   		  	<Display value={this.state.displayedValue}/>
   		  	{this.renderActionButton('CE','red')}
   		  	{this.renderActionButton('C','red')}
   		    {this.renderActionButton('<=','blue')}
   		  	{this.renderActionButton('÷','blue')}
   		  	{this.renderNumberButton(7)}
   		  	{this.renderNumberButton(8)}
   		  	{this.renderNumberButton(9)}
   		  	{this.renderActionButton('X','blue')}
   		  	{this.renderNumberButton(4)}
   		  	{this.renderNumberButton(5)}
   		  	{this.renderNumberButton(6)}
   		  	{this.renderActionButton('-','blue')}
   		  	{this.renderNumberButton(1)}
   		  	{this.renderNumberButton(2)}
   		  	{this.renderNumberButton(3)}
   		  	{this.renderActionButton('+','blue')}
   		  	{this.renderNumberButton('+/-')}
   		  	{this.renderNumberButton(0)}
   		  	{this.renderNumberButton('.')}
   		  	{this.renderActionButton('=')}
   		  </div>
   		);
  }
}



export default App;

