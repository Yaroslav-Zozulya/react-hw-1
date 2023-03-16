import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const checkStatus = isOnline ? 'online' : 'offline';
  return (
    <li class="item">
      <span class={checkStatus}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
