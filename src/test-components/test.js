import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <p>Hello {this.props.name} </p>
            </div>
        );
    }
}

export default Test;