import React, { Component } from 'react';

class FakeComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">Hello</h1>
        <h1 id="world">world</h1>
        <h1 name="exclamation_mark">!!</h1>
      </div>
    );
  }
}

export default FakeComponent;
