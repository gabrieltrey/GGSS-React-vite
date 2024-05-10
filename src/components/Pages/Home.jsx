import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    return (
        <div>
            <div className="text-center p-10">
                <h2 className="text-4xl text-gray-800 font-bold">Bienvenido a Nuestra Empresa</h2>
                <p className="text-gray-600 mt-4">
                    Ofrecemos una amplia gama de servicios técnicos para mejorar y asegurar tu entorno digital.
                </p>
            </div>
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true} emulateTouch>
                <div>
                    <img src="/public/img1.png" alt="Imagen 1" style={{ height: "50vh", width:"50vh" }} />
                    <p className="legend">Servicio técnico especializado</p>
                </div>
                <div>
                    <img src="/public/img2.png" alt="Imagen 2" style={{ height: "50vh", width:"50vh" }} />
                    <p className="legend">Instalación profesional de CCTV</p>
                </div>
                <div>
                    <img src="/public/img3.png" alt="Imagen 3" style={{ height: "50vh", width:"50vh" }} />
                    <p className="legend">Desarrollo y diseño de sitios web</p>
                </div>
            </Carousel>
            
            <div className="bg-gray-100 p-8">
            <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">"Excelente servicio y atención al cliente, mi laptop nunca había funcionado tan bien."</p>
                <div className="mt-4">
                    <p className="font-semibold">Juan Pérez</p>
                    <p className="text-sm text-gray-500">CEO, Empresa X</p>
                </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">"Los recomiendo mucho, solucionaron problemas que otros técnicos no pudieron resolver."</p>
                <div className="mt-4">
                    <p className="font-semibold">Ana Gómez</p>
                    <p className="text-sm text-gray-500">Emprendedora</p>
                </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">"Rápidos y profesionales, el sistema de CCTV quedó perfectamente instalado."</p>
                <div className="mt-4">
                    <p className="font-semibold">Carlos Ruiz</p>
                    <p className="text-sm text-gray-500">Gerente de Seguridad</p>
                </div>
            </div>
        </div>
            </div>
</div>
        </div>
    );
};

export default Home;
