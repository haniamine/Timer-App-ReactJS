import React, { Component } from "react";
import Test from "./test";
import Item from "./Item";
import Event from "./Event";
import Form from "./Form";

class App extends Component {
  list = [
    { a: "1", b: "2",bool: true },
    { a: "11", b: "21",bool: false },
    { a: "12", b: "23",bool: true }
  ];
  renderList(l) {
    return l.map(item => {
      return <Item key={item.a} name={item.a} description={item.b} bool={item.bool}></Item>;
    });
  }
  render() {
    return (
      <div className="App">
        <Test name="amin2e" />
        {this.renderList(this.list)}
        <Event btn="Clique"/>

        <Form/>
      </div>
    );
  }
}

export default App;
