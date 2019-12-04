import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer : {this.props.footer}</h1>
      </div>
    );
  }
}

export default Footer;
