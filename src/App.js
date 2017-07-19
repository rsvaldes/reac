import React, { Component } from 'react';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
import Message from './Message';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      messages: props.messages,
      selectMessage: (e) => {
        let messagesArr = this.props.messages;
        let selectedMessage = messagesArr.find((i) => {
          return i.id === e.id;
        });
        (selectedMessage.selected === false) ? selectedMessage.selected = true : selectedMessage.selected = false;
        this.setState({messages:messagesArr});
      }
    };
  }

  render() {
    return (
      <div>
      <Toolbar />
      <MessageList messages={this.state.messages} selectMessage={this.state.selectMessage} />
      </div>
    )}

}

export default App;
