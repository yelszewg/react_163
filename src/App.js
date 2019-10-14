import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
componentDidMount() {
  console.log(this.inputRef.current.value)
}
  render() {
   
    return <input type = "text"
    ref = {
      this.inputRef
    }
    />;
  }
}

