import React, { Component } from "react";

class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || ""
  };
  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  handleClick = () => {
    const { title, project } = this.state;
    if (this.props.id) {
      const id = this.props.id;
      this.props.handleFormSubmit({ id, title, project });
    } else {
      this.props.handleFormSubmit({ title, project });
    }
  };
  render() {
    const submitText = this.props.title ? "Modifier" : "Créer";
    return (
      <div className="form">
        <div className="form--content">
          <div className="form--item">
            <label>Titre</label>
            <input
              type="text"
              placeholder="Mon Titre"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form--item">
            <label>Projet</label>
            <input
              type="text"
              placeholder="Mon Projet"
              value={this.state.project}
              onChange={this.handleProjectChange}
            />
          </div>
        </div>
        <div className="form--button">
          <button className="button btn--submit" onClick={this.handleClick}>
            {submitText}
          </button>
          <button
            className="button btn--cancel"
            onClick={this.props.handleFormClose}
          >
            Annuler
          </button>
        </div>
      </div>
    );
  }
}

export default TimerForm;
