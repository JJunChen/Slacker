import React from 'react';

const ChatRoom = (props) => {
  let {name, onClickHandler} = props;
  return (
    <div className="list-group-item" onClick={onClickHandler}>{name}</div>
  );
};

export default ChatRoom;