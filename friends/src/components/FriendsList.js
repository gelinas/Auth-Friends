import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            // console.log("get response", res);
            setFriends(res.data);
        })
        .catch(err => console.log(err.response));
    }, []);

    // implement loading spinner
    // if (something) { return <div>loading spinner</div>}
    return (
        <>
        <h1>My Friends List</h1>
        <div className="friend-container">
            {/*error rendering */}
            {friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
        <FriendForm friends={friends} setFriends={setFriends} />
        </>
    )
}

export default FriendsList;