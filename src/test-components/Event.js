import React, { Component } from 'react';

class Event extends Component {

    handleClick(){
        alert("hello")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.btn}</button>
            </div>
        );
    }
}

export default Event;