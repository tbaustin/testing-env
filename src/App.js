import React, { Component } from 'react';
import zygote from 'zygote-cart';
import './App.css';

class App extends Component {
  state = {
    place: 'Evansville'
  };
  render() {
    return (
      <div>
        <button onClick={() => zygote.toggleCart()}>Cart</button>
        <zygote.ZygoteContainer />
      </div>
    );
  }
}

export default App;
