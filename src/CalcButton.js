import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
     <div>
     <button className='calcButton' onClick=
		{() =>{this.props.updateDisplay(this.props.value)}}>
      {this.props.value}
     </button>
     </div>
    );
  }
}

export default Button;

