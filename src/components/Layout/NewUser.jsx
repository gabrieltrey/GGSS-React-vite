import React, { useState,useContext } from 'react';

const NewUser = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Enviar los datos a la API
        try {
          const response = await fetch('http://localhost:3000/client', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="Nombre"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={formData.lastname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    };

export default NewUser;
