import React, { Component } from 'react';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
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
      },
      starMessage: (e) => {
        let messagesArr = this.props.messages;
        let starredMessage = messagesArr.find((i) => {
          return i.id === e.id;
        });
        (starredMessage.starred === false) ? starredMessage.starred = true : starredMessage.starred = false;
        this.setState({messages:messagesArr});
      }
    };
  }

  render() {
    return (
      <div>
      <Toolbar messages = {this.state.messages}/>
      <MessageList messages={this.state.messages} selectMessage={this.state.selectMessage} starMessage={this.state.starMessage} />
      </div>
    )}

}

export default App;
