import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const checkStatus = isOnline ? 'online' : 'offline';
  return (
    <li className="item">
      <span className={checkStatus}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
