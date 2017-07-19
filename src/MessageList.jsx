import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.messages.map((e, i) => {
          return (
            <Message key={i} message={e} selectMessage={this.props.selectMessage} />);
          })
        }
      </div>
    );
  }

}

  export default MessageList;
