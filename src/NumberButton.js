import React, { Component } from 'react';

class NumberButton extends Component {
  render() {
    return (
     <div>
     <button className={'calcButton '+this.props.color} onClick=
		{() =>{this.props.updateDisplay(this.props.value)}}>
      {this.props.value}
     </button>
     </div>
    );
  }
}

export default NumberButton;

