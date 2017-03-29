import React, { Component } from 'react';

import Title from './Header/Title';

class Header extends Component {
    handleNameChange(e) {
        const name = e.target.value;
        this.props.changeName(name);
    }
    render() {
        return (
            <div>
                <Title name={this.props.name}/>
                <input onChange={this.handleNameChange.bind(this)}/>
            </div>
        );
    }
}
//Some comments
export default Header;
