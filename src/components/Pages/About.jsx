// src/components/About.js
const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center my-6">Acerca de Nosotros</h1>
            <p className="text-lg text-center mb-8">
                Somos una empresa líder en soluciones tecnológicas con años de experiencia ofreciendo
                servicios de alta calidad para el mantenimiento y reparación de dispositivos tecnológicos,
                instalación de sistemas de seguridad CCTV y desarrollo web.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Servicio Técnico de Computadoras</h2>
                    <p>
                        Ofrecemos reparación y mantenimiento de computadoras de escritorio y laptops,
                        optimización de sistemas, actualizaciones de hardware y software para asegurar
                        el máximo rendimiento de tus equipos.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Reparación de Dispositivos Móviles</h2>
                    <p>
                        Nuestros técnicos especializados proporcionan soluciones rápidas y eficientes
                        para todo tipo de dispositivos móviles. Reparamos pantallas, baterías, cámaras
                        y más, utilizando siempre piezas de alta calidad.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Instalación de CCTV</h2>
                    <p>
                        Instalamos sistemas de cámaras de seguridad CCTV adaptados a tus necesidades.
                        Protege tu hogar o negocio con tecnología de vigilancia de vanguardia que te
                        permite monitorear desde cualquier lugar.
                    </p>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-3">Creación de Páginas Web</h2>
                    <p>
                        Desarrollamos sitios web que no solo lucen increíbles, sino que también son
                        fáciles de usar y optimizados para motores de búsqueda. Desde sitios web
                        corporativos hasta tiendas en línea, podemos ayudarte a establecer una presencia
                        sólida en internet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
