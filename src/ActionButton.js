import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    return (
     <div>
     <button className={'calcButton '+this.props.color} onClick=
		{() =>{this.props.actionButton(this.props.value)}}>
      {this.props.value}
     </button>
     </div>
    );
  }
}

export default ActionButton;

