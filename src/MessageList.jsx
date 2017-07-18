import React from 'react';

const MessageList = ({messages}) => {
  return(
    <div>
    {messages.map(e =>
      e.subject)}</div>
    )
  }

export default MessageList;
