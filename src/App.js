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
      displayEditable: true,
    	operatorActive: false,
      activeOperatorButton:undefined,
      repeatOperator:undefined
    	}
    this.updateDisplay = this.updateDisplay.bind(this)
    this.actionButton = this.actionButton.bind(this)
  	}
  	actionButton(valueOfButton){
      var calcNums= (activeOperatorButton) =>{
        var displayedValue= this.state.displayedValue
        var storedValue= this.state.storedValue
        switch(activeOperatorButton){
          case '÷':
          displayedValue= storedValue/displayedValue
          this.setState({
            displayedValue: displayedValue,
            repeatOperator: '÷',
            displayEditable: false
          })
          break;
          }
        }
  		switch(valueOfButton){
  			case 'CE':
  			this.setState({
  				storedValue: undefined,
  				displayedValue: '0',
  				dotPressed: false,
          operatorActive: false,
          repeatOperator: undefined,
          activeOperatorButton: undefined
  			})
  			break;

  			case 'C':
  			this.setState({
  				displayedValue: '0',
  				dotPressed: false
  			})
  			break;

  			case '<=':
  			var lastDigitInDisplay
  			var lengthOfDisplay
        if (this.state.displayEditable) {
          lastDigitInDisplay= this.state.displayedValue.slice(-1)
          lengthOfDisplay= this.state.displayedValue.replace('-','').length
        }
        if (!this.state.displayEditable) {
          return
        }
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
  			
        case '÷':
        if (this.state.repeatOperator==='÷') {
          console.log('you pressed the same button twice')
        }
        if (this.state.operatorActive===false) {
          this.setState({
            operatorActive:true,
            activeOperatorButton:'÷',
            storedValue:this.state.displayedValue
          })
        }
        if (this.state.storedValue) {
          calcNums(this.state.activeOperatorButton)
          this.setState({
            activeOperatorButton:'÷'
          })
        }
        break;


  			default:
  			return;
  		}
  	}
  	updateDisplay(valueOfButton){
  		if (valueOfButton==='+/-') {
        if (this.state.operatorActive) {
          return
        }
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
  				dotPressed: true,
          repeatOperator: undefined,
          displayEditable: true
  			})
        if (this.state.operatorActive===true) {
          this.setState({
            displayedValue: '0.'
          })
        }
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
      if (this.state.operatorActive) {
        this.setState({
          operatorActive: false,
          repeatOperator: undefined,
          displayedValue: valueOfButton.toString(),
          displayEditable: true
          })
      }
  	}

	renderNumberButton(valueOfButton,color){
		return (
			<NumberButton value={valueOfButton} 
			updateDisplay= {this.updateDisplay}
      color= {color}
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
   		  	{this.renderActionButton('CE','green')}
   		  	{this.renderActionButton('C','green')}
   		    {this.renderActionButton('<=','blue')}
   		  	{this.renderActionButton('÷','blue')}
   		  	{this.renderNumberButton(7,'grey')}
   		  	{this.renderNumberButton(8,'grey')}
   		  	{this.renderNumberButton(9,'grey')}
   		  	{this.renderActionButton('X','blue')}
   		  	{this.renderNumberButton(4,'grey')}
   		  	{this.renderNumberButton(5,'grey')}
   		  	{this.renderNumberButton(6,'grey')}
   		  	{this.renderActionButton('-','blue')}
   		  	{this.renderNumberButton(1,'grey')}
   		  	{this.renderNumberButton(2,'grey')}
   		  	{this.renderNumberButton(3,'grey')}
   		  	{this.renderActionButton('+','blue')}
   		  	{this.renderNumberButton('+/-','grey')}
   		  	{this.renderNumberButton(0,'grey')}
   		  	{this.renderNumberButton('.','grey')}
   		  	{this.renderActionButton('=','grey')}
   		  </div>
   		);
  }
}



export default App;

