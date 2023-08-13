import React from "react";

class Greetings extends React.PureComponent {
  render() {
    return <h1>Welcome, today is {this.props.date}</h1>;
  }
}

export default Greetings;
