import React from 'react';
import FriendCard from './FriendCard';

function FriendsList(props) {
    let friends = [
        {
          id: 1,
          name: 'Ben',
          age: 30,
          email: 'ben@lambdaschool.com'
        },
        {
          id: 2,
          name: 'Austen',
          age: 45,
          email: 'austen@lambdaschool.com'
        },
        {
          id: 3,
          name: 'Ryan',
          age: 15,
          email: 'ryan@lambdaschool.com'
        },
        {
          id: 4,
          name: 'Dustin',
          age: 25,
          email: 'D-munny@lambdaschool.com'
        },
        {
          id: 5,
          name: 'Sean',
          age: 35,
          email: 'sean@lambdaschool.com'
        },
        {
          id: 6,
          name: 'Michelle',
          age: 67,
          email: 'michelle@gmail.com'
        }
      ];
    useEffect(() => {
        //get request
    }, []);

    // implement loading spinner
    // if (something) { return <div>loading spinner</div>}
    return (
        <div className="friend-container">
            <h1>My Friends List</h1>
            {/*error rendering */}
            {friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
    )
}

export default FriendsList;