import React, { Component } from 'react';

class FakeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1 className="hello">Hello</h1>
        <h1 id="world">world</h1>

        <button id="add" onClick={() => this.handleButtonClick(1)}>
          Add
        </button>

        <button id="del" onClick={() => this.handleButtonClick(-1)}>
          Del
        </button>

        <p>You have clicked <span id="count">{this.state.count}</span> time(s).</p>

      </div>
    );
  }

  handleButtonClick(delta) {
    console.log('Button clicked!');
    this.setState({
      count: this.state.count + delta
    })
  }

}

export default FakeComponent;
