import React, { Component } from 'react';
// import logo from './favicon.ico';
// import Message from './Message';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
// import Message from './Message';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      messages: props.messages
    }
  }
  render() {
    return (
      <div>
      <Toolbar />
      <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
