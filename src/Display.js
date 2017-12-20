import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
     <div className= 'display'>
     <h1>{this.props.value}</h1>
     </div>
    );
  }
}



export default Display;

