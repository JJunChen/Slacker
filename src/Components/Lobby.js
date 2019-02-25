import React, { Component } from 'react';
import ChatRoom from './ChatRoom';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      public: [{name: 'General', roomId: 1}],
      private: [{name: 'Private', roomId: 2}]
    };
    this.onClickHandler.bind(this);
  }
  onClickHandler() {
    console.log('clicked');
  }
  render() {
    let publicRooms = [];
    let privateRooms = [];
    this.state.public.forEach(room => publicRooms.push(<ChatRoom name={room.name} key={room.roomId} onClickHandler={this.onClickHandler}/>));
    this.state.private.forEach(room => privateRooms.push(<ChatRoom name={room.name} key={room.roomId} onClickHandler={this.onClickHandler} />));
    return (
      <div className="lobby"> Lobby
        <div className="public list-group">{publicRooms}</div>
        <div className="private list-group">{privateRooms}</div>
      </div>
    )
  }
}

export default Lobby;