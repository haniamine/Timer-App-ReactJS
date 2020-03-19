import React, { Component } from "react";
import Container from "./Container";

class ListContainer extends Component {
  renderContainer = () => {
    return this.props.timers.map(timer => {
      return (
        <Container
          handleFormSubmit={this.props.handleFormSubmit}
          handleDelete={this.props.handleDelete}
          key={timer.id}
          {...timer}
        />
      );
    });
  };
  render() {
    return (
      <div className="list--container">
        <h1>List</h1>
        {this.renderContainer()}
      </div>
    );
  }
}

export default ListContainer;
