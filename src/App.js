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

    render() {
        setTimeout(() => {
            this.setState({
                name: 'kwang' === this.state.name ? 'kwang89' : 'kwang'
            })
        }, 1000);
        return (
            <div>
                <Header name={this.state.name}/>
                <Header name="kwang89"/>
                <Footer />
            </div>
        );
    }
}

export default App;
