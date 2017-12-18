import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Button extends Component {
  render() {
    return (
     <div>
     <button class='calcButton'>
      {this.props.buttonText}
     </button>
     </div>
    );
  }
}



export default Button;

