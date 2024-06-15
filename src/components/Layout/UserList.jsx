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
      <ul className='text-orange-600'>
        {users.map((user) => (
          <table className='flex-row table-fixed caption-bottom'><tr>
            <td className='border border-gray-500 border-spacing: 10rem 10rem p-1'><li key={user.id}>
            {user.name} {user.phone} ({user.email})
          </li></td><td><button className='decoration-slate-50 text-center'>click</button></td></tr></table>
        ))}
      </ul>
    </div>
  );
};

export default UserList;