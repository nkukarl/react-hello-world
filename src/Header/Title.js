import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h1>Welcome {this.props.name}!</h1>
        );
    }
}

export default Title;
