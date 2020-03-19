import React, { Component } from "react";

class Form extends Component {
  state = {
    nom: ""
  };



  handleClick = () => {
    alert("ce " + this.ref + " contient: " + this.ref.value);
  };
  render() {
    return (
      <div>
        <h2>This is a Form:</h2>
        <form>
          <input
            ref={r => (this.ref = r)}
            
          />
          
        </form>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default Form;
