import React, { Component } from 'react';
import './App.css';
import dataset from './dataset';

const sortedData = [...dataset];
sortedData.sort((a, b) => a - b);

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
      if (dataset[i] === num) {
        this.setState({ tries: counter, found: true });
        return;
      }
      counter++;
    }
    this.setState({ tries: dataset.length, found: false });
  }

  binarySearch(array, num, start = 0, end = array.length, counter = 1) {
    if (start > end) {
      this.setState({ tries: array.length, found: false });
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === num) {
      this.setState({ tries: counter, found: true });
      return;
    }
    else if (item < num) {
      return this.binarySearch(array, num, index + 1, end, counter + 1);
    }
    else if (item > num) {
      return this.binarySearch(array, num, start, index - 1, counter + 1);
    }
  }

  render() {
    return (
      <div className="App">
        <label>Number</label>
        <input type='number' ref={this.input}></input>
        <button className='linear-search' onClick={() => this.linearSearch()}>Linear</button>
        <button className='binary-search' onClick={() => this.binarySearch(sortedData, Number(this.input.current.value))}>Binary</button>
        <div className='results'>
          {!(this.state.found) ? 'Not in dataset.' : ''} The number of tries was {this.state.tries}
        </div>
      </div>
    );
  }
}

export default App;
