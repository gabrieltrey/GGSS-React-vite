import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const contextValue = useContext(UserContext);

  // Verificar si el valor del contexto es válido
  const users = contextValue ? contextValue.users : [];

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();
    const email = user.email.toLowerCase();
    const term = searchTerm.toLowerCase();
    return fullName.includes(term) || email.includes(term);
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Buscar usuarios</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o correo electrónico"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.firstname} {user.lastname} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;