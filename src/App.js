import React, { Component } from "react";
import Box from "./components/Box";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Box />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
