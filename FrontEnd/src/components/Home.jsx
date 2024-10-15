import React,{useState} from 'react';

export default function Home(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, title: '¿Qué es una API?', text: 'Las API (Application Programming Interface) es un conjunto de reglas y protocolos que permite a diferentes aplicaciones comunicarse entre sí.' },
        { id: 2, title: '¿Cuál es su propósito?', text: 'Las APIs son importantes en el desarrollo de software. Por ejemplo, facilitan la integración de diferentes sistemas, permiten la reutilización de funcionalidades y datos, y fomentan la creación de aplicaciones más rápidas y eficientes.' },
        { id: 3, title: 'Tipos de APIs', text: 'RESTful APIs, SOAP APIs, GraphQL.' },
        {id:4,title:'Métodos más comunes', text:"GET, POST, PUT, PATCH y DELETE"},
        {id:5,title:'Seguridad en las APIs',text:"La autenticación (tokens, OAuth) y la protección contra ataques (uso de HTTPS, control de acceso)."},
        {id:6,title: 'Beneficio de las APIs',text:'La modularidad, la escalabilidad y la flexibilidad.'},
        {id:7,title:'Casos de uso comunes',text:'Integración de pagos, redes sociales, servicios de geolocalización, etc.'},

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return(
    <>
    <div className="main">
                <div className="carousel">
                    <button className="prev btn" onClick={prevSlide}>❮</button>
                    <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="slide">
                                <h1>{slide.title}</h1>
                                <br />
                                <p>{slide.text}</p>
                            </div>
                        ))}
                    </div>
                    <button className="next btn" onClick={nextSlide}>❯</button>
                </div>
            </div>
        </>
    );
}