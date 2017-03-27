import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: 'kwang',
        }
    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        return (
            <div>
                <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
                <Footer />
            </div>
        );
    }
}

export default App;
