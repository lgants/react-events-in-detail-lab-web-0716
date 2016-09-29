const React = require('react');


class DelayedButton extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Delayed</button>
      </div>
    )
  }
}




module.exports = DelayedButton
