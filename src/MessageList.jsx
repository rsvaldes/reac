import React from 'react';
import Message from './Message';

class MessageList extends React.Component {

  render() {
    return (
      <div>
        {this.props.messages.map((e, i) => {
          return (
            <Message key={i} message={e} selectMessage={this.props.selectMessage} starMessage={this.props.starMessage}
            />);
          })
        }
      </div>
    );
  }

}

  export default MessageList;
