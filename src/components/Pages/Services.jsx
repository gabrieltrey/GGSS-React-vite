// src/components/Services.js
const Services = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center my-6">Nuestros Servicios</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Servicio Técnico de Computadoras</h2>
                    <p>
                        Proporcionamos soporte completo para computadoras de escritorio y laptops, incluyendo reparación, mantenimiento, actualización de hardware y software, y soluciones de optimización para mejorar el rendimiento.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Reparación de Dispositivos Móviles</h2>
                    <p>
                        Especialistas en la reparación de todo tipo de dispositivos móviles. Ofrecemos servicios para pantallas rotas, problemas de batería, cámara, y más, utilizando repuestos de alta calidad.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Instalación de CCTV</h2>
                    <p>
                        Instalamos y mantenemos sistemas de cámaras de seguridad CCTV, proporcionando soluciones personalizadas para la vigilancia y seguridad de tu hogar o empresa.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Desarrollo de Páginas Web</h2>
                    <p>
                        Creamos páginas web que ayudan a mejorar la presencia en línea de tu negocio. Desde sitios informativos hasta soluciones e-commerce, desarrollamos sitios web atractivos y funcionales.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;