import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const URL =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    
    fetch(URL)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state
    const RESULT = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

  return <ul>{RESULT}</ul>
  }
}

export default App