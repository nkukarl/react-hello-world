import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

class App extends Component {

    constructor() {
        super();
        this.state = {name: 'kwang'};
    }

    render() {
        setTimeout(() => {
            this.setState({name: 'kwang89'})
        }, 1000);
        return (
            <div>
                <Header />
                {this.state.name}
                <Footer />
            </div>
        );
    }
}

export default App;
