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
      storedValueForRepeatedFunction:undefined,
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
        var displayedValue= Number(this.state.displayedValue)
        var storedValue= Number(this.state.storedValue)
        var storedValueForRepeatedFunction= Number(this.state.storedValueForRepeatedFunction)
        switch(activeOperatorButton){
          case '÷':
            if (this.state.repeatOperator==='÷') {
              displayedValue= displayedValue/storedValueForRepeatedFunction
              this.setState({
                storedValue: displayedValue,
                displayedValue: displayedValue,
                displayEditable: false
              })
              break
            }
            displayedValue= storedValue/displayedValue
            this.setState({
              storedValueForRepeatedFunction:this.state.displayedValue,
              storedValue: displayedValue,
              displayedValue: displayedValue,
              repeatOperator: '÷',
              displayEditable: false
            })
          break;

          case 'X':
            if (this.state.repeatOperator==='X') {
              displayedValue= displayedValue*storedValueForRepeatedFunction
              this.setState({
                storedValue: displayedValue,
                displayedValue: displayedValue,
                displayEditable: false
              })
              break
            }
            displayedValue= storedValue*displayedValue
            this.setState({
              storedValueForRepeatedFunction:this.state.displayedValue,
              storedValue: displayedValue,
              displayedValue: displayedValue,
              repeatOperator: 'X',
              displayEditable: false
            })
          break;

          case '+':
            if (this.state.repeatOperator==='+') {
              displayedValue= displayedValue+storedValueForRepeatedFunction
              this.setState({
                storedValue: displayedValue,
                displayedValue: displayedValue,
                displayEditable: false
              })
              break
            }
            displayedValue= storedValue+displayedValue
            this.setState({
              storedValueForRepeatedFunction:this.state.displayedValue,
              storedValue: displayedValue,
              displayedValue: displayedValue,
              repeatOperator: '+',
              displayEditable: false
            })
          break;

          case '-':
            if (this.state.repeatOperator==='-') {
              displayedValue= displayedValue-storedValueForRepeatedFunction
              this.setState({
                storedValue: displayedValue,
                displayedValue: displayedValue,
                displayEditable: false
              })
              break
            }
            displayedValue= storedValue-displayedValue
            this.setState({
              storedValueForRepeatedFunction:this.state.displayedValue,
              storedValue: displayedValue,
              displayedValue: displayedValue,
              repeatOperator: '-',
              displayEditable: false
            })
          break;

          default:
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
          activeOperatorButton: undefined,
          displayEditable: true
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

        case 'X':
        if (this.state.repeatOperator==='X') {
          console.log('you pressed the same button twice')
        }
        if (this.state.operatorActive===false) {
          this.setState({
            operatorActive:true,
            activeOperatorButton:'X',
            storedValue:this.state.displayedValue
          })
        }
        if (this.state.storedValue) {
          calcNums(this.state.activeOperatorButton)
          this.setState({
            activeOperatorButton:'X'
          })
        }
        break;

        case '+':
        if (this.state.repeatOperator==='+') {
          console.log('you pressed the same button twice')
        }
        if (this.state.operatorActive===false) {
          this.setState({
            operatorActive:true,
            activeOperatorButton:'+',
            storedValue:this.state.displayedValue
          })
        }
        if (this.state.storedValue) {
          calcNums(this.state.activeOperatorButton)
          this.setState({
            activeOperatorButton:'+'
          })
        }
        break;

        case '-':
        if (this.state.operatorActive===false) {
          this.setState({
            operatorActive:true,
            activeOperatorButton:'-',
            storedValue:this.state.displayedValue
          })
        }
        if (this.state.storedValue) {
          calcNums(this.state.activeOperatorButton)
          this.setState({
            activeOperatorButton:'-'
          })
        }
        break;
        case '=':
        this.setState({
          operatorActive: false,
          activeOperatorButton:undefined,
          repeatOperator:undefined
        })
        calcNums(this.state.activeOperatorButton)
        break



  			default:
  			break;
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
        if(this.state.operatorActive===true){
          this.setState({
            displayedValue: '0.',
            operatorActive: false,
            dotPressed: true
          })
        }
  			if (this.state.dotPressed) {
  				return
  			}
  			this.setState({
  				dotPressed: true,
          repeatOperator: undefined,
          displayEditable: true
  			})
        if (this.state.displayedValue==='0') {
          this.setState({
            displayedValue: '0.',
            operatorActive: false,
            dotPressed: true
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
      if (this.state.operatorActive&&valueOfButton!=='.') {
        this.setState({
          operatorActive: false,
          repeatOperator: undefined,
          displayedValue: valueOfButton.toString(),
          displayEditable: true,
          dotPressed: false
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

