import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users`).then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={user}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
