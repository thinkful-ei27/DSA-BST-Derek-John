import React, { Component } from 'react';
import './App.css';
import dataset from './scratch';

// const initialstate = dataset;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.input = React.createRef()
  }
  linearSearch() {
    const num = Number(this.input.current.value);
    this.setState({counter: 0});
    for (let i=0; i<dataset.length; i++) {
      if (dataset[i] == num) {
        return;
      }
      this.setState({counter: this.state.counter + 1})
    }
  }
  render() {
    return (
      <div className="App">
        <label>Number</label>
        <input type='number' ref={this.input}></input>
        <button className='linear-search' onClick={() => this.linearSearch()}>Linear</button>
        <button className='binary-search'>Binary</button>
        <div className='results'>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
