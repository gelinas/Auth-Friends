import React from 'react';

const FriendCard = props => {
  return (
    <div className="friend-card">
      <p>{`Friend: ${props.friend.name}`}</p>
      <p>{`Age: ${props.friend.age}`}</p>
      <p>{`email: ${props.friend.email}`}</p>
    </div>
  )
};

export default FriendCard;
