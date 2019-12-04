import React, { Component } from "react";
import ReactDOM from "react-dom";

class CarComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Inside child constructor");
  }

  componentWillMount() {
    console.log("Inside child will mount");
  }

  componentDidMount() {
    console.log("Inside child did mount");
  }

  componentWillUpdate(prevProps, nextProps) {
    console.log("Inside child will update");
  }

  componentWillReceiveProps() {
    console.log("Inside child receive props");
  }

  render() {
    console.log("Inside child render");
    return (
      <div>
        <h1>
          This component has details about {this.props.brand} and{" "}
          {this.props.model}
        </h1>
        <button
          onClick={this.props.handleFavoriteCar.bind(this, this.props.model)}
        >
          Make me favorite
        </button>
      </div>
    );
  }
}

export default CarComponent;
