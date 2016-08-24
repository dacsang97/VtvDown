import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/home'

class Root extends Component {
  render() {
    return (
      <Home />
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
