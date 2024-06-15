import React, { useState, useContext } from "react";
import UserList from "./UserList";

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const resetForm = () => {
    setFormData({
      // Aquí debes proporcionar los valores iniciales para cada campo del formulario
      name: "",
      phone: "",
      email: "",
    });
  };

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
      const response = await fetch("http://localhost:3000/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El usuario se creó correctamente
        const data = await response.json();
        console.log(data);
        alert("Usuario registrado corectamente");
        resetForm();
      } else if (response.status === 500 || response.status === 409) {
        // El usuario ya existe
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        // Mostrar un mensaje al usuario indicando que el usuario ya existe
        alert("El usuario ya existe");
      } else {
        // Otro error
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agregar un usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombres"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefono"
          value={formData.phone}
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
    </div>
  );
};

export default NewUser;
