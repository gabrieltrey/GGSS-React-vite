import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/client');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstname} {user.lastname} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;