
// src/components/ContactForm.js
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lo que sucederá cuando se envíe el formulario.
        // Por ejemplo, conectar con un backend o mostrar un mensaje de éxito.
        console.log(formData);
        alert('Formulario enviado. Verifica la consola para ver la información.');
        // Limpia el formulario
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <form className="max-w-md mx-auto my-10 p-5 bg-white shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-6">Contacto</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu nombre"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu email"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    placeholder="Asunto del mensaje"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    placeholder="Escribe tu mensaje aquí"
                    required
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enviar
            </button>
        </form>
    );
};

export default Contact;
