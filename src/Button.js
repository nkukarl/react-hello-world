import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button>Click me, {this.props.name}!</button>
        );
    }
}

export default Button;
