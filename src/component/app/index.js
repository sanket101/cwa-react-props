import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListComponent from "../../component/list-component";
import Header from "../../component/header";
import Footer from "../../component/footer";
import CarComponent from "../car-component";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.handleFavoriteCar = this.handleFavoriteCar.bind(this);
    console.log("Inside parent constructor");
    this.state = {
      brand1: "Ford",
      model1: "Mustang",
      brand2: "Ford",
      model2: "Verna",
      myFav: "Mustang"
    };
  }

  handleFavoriteCar(selectedCard) {
    console.log("Inside parent handle favorite car function");
    this.setState({ myFav: selectedCard });
  }

  componentWillMount() {
    console.log("Inside parent will mount");
  }

  componentDidMount() {
    console.log("Inside parent did mount");
  }

  componentWillUpdate(prevProps, nextProps) {
    console.log("Inside parent will update");
  }

  componentWillReceiveProps() {
    console.log("Inside parent receive props");
  }

  render() {
    console.log("Inside parent render");
    return (
      <div>
        <h1>My favorite car is {this.state.myFav} </h1>
        <CarComponent
          brand={this.state.brand1}
          model={this.state.model1}
          handleFavoriteCar={this.handleFavoriteCar}
        ></CarComponent>
        <CarComponent
          brand={this.state.brand2}
          model={this.state.model2}
          handleFavoriteCar={this.handleFavoriteCar}
        ></CarComponent>
      </div>
    );
  }
}

export default AppComponent;
