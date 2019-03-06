import React, { Component } from 'react';
import './App.css';
import dataset from './dataset';

// const initialstate = dataset;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      found: true,
      tries: 0
    }
    this.input = React.createRef()
  }
  linearSearch() {
    const num = Number(this.input.current.value);
    this.setState({ tries: 0 });
    let counter = 1;
    for (let i = 0; i < dataset.length; i++) {
      if (dataset[i] == num) {
        this.setState({ tries: counter, found: true });
        return;
      }
      counter++;
    }
    this.setState({ tries: dataset.length, found: false });
  }
  render() {
    return (
      <div className="App">
        <label>Number</label>
        <input type='number' ref={this.input}></input>
        <button className='linear-search' onClick={() => this.linearSearch()}>Linear</button>
        <button className='binary-search'>Binary</button>
        <div className='results'>
          {!(this.state.found) ? 'Not in dataset.' : ''} The number of tries was {this.state.tries}
        </div>
      </div>
    );
  }
}

export default App;
