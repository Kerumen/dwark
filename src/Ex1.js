import React, { Component } from 'react';

const timeout = () => new Promise(resolve => setTimeout(resolve, 1000));

class Ex1 extends Component {
  async componentDidMount() {
    const text = document.getElementById('text');
    await timeout();
    text.innerText = '2';
    await timeout();
    text.innerText = '1';
    await timeout();
    text.innerText = 'Welcome to Krawd!';
  }

  render() {
    return (
      <div className="flex-center">
        <div id="text">3</div>
      </div>
    );
  }
}

export default Ex1;
