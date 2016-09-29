const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(){
    //use super to inherit from the existing constructor, which is included by default
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render(){
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

module.exports = CoordinatesButton
