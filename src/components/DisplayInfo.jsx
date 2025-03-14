import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/users`).then((response) => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} ({user.age} years) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayInfo;
