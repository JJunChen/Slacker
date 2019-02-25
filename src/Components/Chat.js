import React, { Component } from 'react';
import MessageHistory from './MessageHistory';
import Footer from './Footer';

class Chat extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="chat">Chat
        <MessageHistory/>
        <Footer/>
      </div>
    )
  }
}

export default Chat;