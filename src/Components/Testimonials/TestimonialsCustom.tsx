import React, { useState } from 'react';

export default function TestimonialsCustom() {
    const testimonialsData = [
        {
            id: 1,
            title: 'Reserva Privada Arroyo Hondo',
            content:
                'Desde lo personal la relación comercial con Alfonso comenzó en 2020, desde un primer momento los valores, las propuestas y la transparencia fueron grandes motivadores que permitieron llevar adelante la relación. A lo largo del tiempo fuimos viendo como los proyectos avanzaban y se cumplían las expectativas, en algunos casos incluso se superaron. Estamos muy conformes con la vocación que se lleva adelante este profesional, vemos gran conocimiento y estudio constante que respaldan los proyectos. Desde nuestra posición estamos realmente conformes con la elección que tomamos, estamos agradecidos y con mucha expectativa de cara al futuro. Recomendamos sus servicios profesionales sin lugar a dudas.',
            author: 'Joaquín Metral',
            position: 'Cliente',
            image:
                'arroyoHondo.jpeg',
        },
        {
            id: 12,
            title: 'Dos Arroyos',
            content:
                ' Dos Arroyos me encantó por su compromiso con la sustentabilidad. Las cabañas son hermosas y cómodas, y se integran perfectamente al entorno natural. Me gustó mucho que se usen materiales eco-amigables y energías renovables. Además, la ubicación es ideal para disfrutar de la naturaleza y la tranquilidad. Si buscas un lugar para relajarte y conectar con el medio ambiente, Dos Arroyos es una excelente opción. Lo recomiendo a todos aquellos que aprecian la belleza natural y la responsabilidad ambiental. ',
            author: 'Maria Issler',
            position: 'Cliente',
            image:
                'https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/vertical-arroyo.jpg',
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonialsData[currentTestimonialIndex];

    return (
        <section className="bg-gray-900">
            <div className="relative flex">
                <div className="min-h-screen lg:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen bg-gray-800 lg:block"></div>

                <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                    <h1 className="text-2xl font-semibold  capitalize lg:text-3xl text-white">
                        Lo que mis {" "}
                        <span className="text-blue-500">clientes</span> <br />{" "}
                        dicen de mi trabajo.
                    </h1>

                    <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                        <img
                            className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-[38rem]"
                            src={currentTestimonial.image}
                            alt=""
                        />
                        
                    
                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-white lg:w-72">
                                {currentTestimonial.title}
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-400">
                                {currentTestimonial.content}
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">
                                {currentTestimonial.author}
                            </h3>
                            <p className="text-gray-300">
                                {currentTestimonial.position}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-12 lg:justify-start">
                        <button
                            title="left arrow"
                            onClick={handlePrevTestimonial}
                            className="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hover:bg-gray-800 "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            title="right arrow"
                            onClick={handleNextTestimonial}
                            className="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hover:bg-gray-800 lg:mx-6"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}