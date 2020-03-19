import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component {
  state = {
    isFormOpen: false
  };
  handleFormClose = () => this.setState({ isFormOpen: false });
  handleEditFormOpen= () => this.setState({ isFormOpen: true });
  handleSubmit =({ id, title, project })=>{
    if (id) {this.props.handleFormSubmit({ id, title, project });this.handleFormClose()}
    else {this.pros.handleFormSubmit({ title, project });}
  }
  render() {
    return (
      <div className="list--container">
        {this.state.isFormOpen ? (
          <TimerForm
            title={this.props.title}
            project={this.props.project}
            id={this.props.id}
            handleFormClose={this.handleFormClose}
            handleFormSubmit={this.handleSubmit}
          />
        ) : (
          <Timer
            title={this.props.title}
            project={this.props.project}
            id={this.props.id}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
            handleEditFormOpen = {this.handleEditFormOpen}
            handleDelete={this.props.handleDelete}
          />
        )}
      </div>
    );
  }
}

export default Container;
