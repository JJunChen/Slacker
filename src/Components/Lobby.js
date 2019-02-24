import React, { Component } from 'react';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      public: [],
      private: []
    };
  }
  render() {
    let publicRooms = [];
    let privateRooms = [];
    this.state.public.forEach(room => publicRooms.push(<ChatRoom name={room.name} key={room.roomId} onClickHandler={this.onClickHandler}/>));
    this.state.private.forEach(room => privateRooms.push(<ChatRoom name={room.name} key={room.roomId} onClickHandler={this.onClickHandler} />));

    return (
      <div className="lobby">
        <div className="public">{publicRooms}</div>
        <div className="private">{privateRooms}</div>
      </div>
    )
  }
}