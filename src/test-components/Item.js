import React, { Component } from "react";

class Item extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>Chargement en cours...</p>
        ) : this.props.bool ? (
          <p>
            {this.props.name} is {this.props.description}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Item;
