import { useEffect, useState } from "react";
import './Friends.css';

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h1>Practicing React Hooks</h1>
      {
        friends.map(friend => {
          const {id, name, email} = friend;
          return (
            <div key={id} className="card">
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Friends;