import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";
import uuid from "uuid";

class Box extends Component {
  state = {
    timers: [
      {
        title: "APPRENDRE",
        project: "PFE",
        id: "01",
        elapsed: 2500000,
        runningSince: null
      },
      {
        title: "HELLLLO",
        project: "INFO",
        id: "02",
        elapsed: 69000,
        runningSince: null
      },
      {
        title: "another one",
        project: "test",
        id: "03",
        elapsed: 51000,
        runningSince: null
      }
    ]
  };

  handleCreateTimer = ({ title, project }) => {
    const timer = {
      title,
      project,
      id: uuid.v4(),
      elapsed: 0,
      runningSince: null
    };
    this.setState({
      timers: [...this.state.timers, timer]
    });
  };
  handleEditTimer = ({ id, title, project }) => {
    console.log("this is handleEditTimer search id: " + id);
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === id) {
          //edit
          console.log("there is changement");
          return { ...timer, title, project };
        }
        //continue
        console.log("nothing changed id: " + timer.id);
        return { ...timer };
      })
    });
  };
  handleDelete = id => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== id)
    });
  };

  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view__box">
          <ListContainer
            handleFormSubmit={this.handleEditTimer}
            handleDelete={this.handleDelete}
            timers={this.state.timers}
          />
          <ActionContainer handleFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}

export default Box;
