const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                <div className="p-4">
                    <h3 className="text-lg font-semibold">GGSS</h3>
                    <p>&copy; {new Date().getFullYear()} G&G Smart Solutions. Todos los derechos reservados.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold">Redes Sociales</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="./facebook.png" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="./twitter.png" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="./instagram.png" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="https://wa.me/+573017137474" target="_blank" rel="noopener noreferrer">
                            <img src="./whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;