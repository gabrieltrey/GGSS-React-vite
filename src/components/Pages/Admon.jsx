import React from 'react';
import NewUser from '../Layout/NewUser';
import UserList from '../Layout/UserList';
import UserSearch from '../Layout/UserSearch';

const Admon = () => {
  return (
    <div>
      <h1 className='text-center'>Formulario de envío de datos</h1>
      <div className='px-3 p-4'><NewUser /></div>
      <div className='px-3 p-4'><UserList/></div>
      <div className='px-3 p-4'><UserSearch/></div>
      
    </div>
  );
};

export default Admon;