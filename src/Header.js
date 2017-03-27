import React, { Component } from 'react';

import Title from './Header/Title';

class Header extends Component {
    render() {
        return (
            <Title name={this.props.name}/>
        );
    }
}

export default Header;
