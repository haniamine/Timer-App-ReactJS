import React, { Component } from "react";
import Button from "./Button.js";
import TimerForm from "./TimerForm.js";

class ActionContainer extends Component {
  state = {
    isFormOpen: false
  };
  handleFormOpen = () => this.setState({ isFormOpen: true });
  handleFormClose = () => this.setState({ isFormOpen: false });
  handleSubmit =({ title, project })=>{
    this.props.handleFormSubmit({ title, project });this.handleFormClose()
  }
  
  render() {
    if (this.state.isFormOpen)
      return <TimerForm handleFormClose={this.handleFormClose} handleFormSubmit={this.handleSubmit}/>;
    else return <Button handleFormOpen={this.handleFormOpen} />;
  }
}

export default ActionContainer;
