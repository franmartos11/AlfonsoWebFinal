import Link from "next/link";

export default function ServicesDisplay() {
    return (
        <section className="bg-gray-900 text-white  ">
            <div className="mx-auto max-w-screen-xl  px-4 py-10 sm:py-12 sm:px-6 lg:py-24 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-6xl text-gray-00  ">
                        MIS SERVICIOS
                    </h2>
                    <p className="mt-3 mb-16 text-gray-300 text-xl ">
                    Descubre cómo puedo llevar tu visión más allá de las expectativas gracias a mi experiencia.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Desarrollo Residencial
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Desde la conceptualización hasta la entrega, creo
                            comunidades residenciales que se destacan por su
                            diseño innovador, comodidades modernas y un enfoque
                            en la calidad de vida.
                        </p>
                    </div>

                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold  text-white">
                            Asociacion Estrategica
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Además del desarrollo sobre tierras propias trabajo con propietarios dispuestos a asociarse con el aporte de su tierra a cambio de unidades resultantes del proyecto, maximizando así las ganancias como propietario. 
                        </p>
                    </div>

                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Consultoría
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Gracias a mi extenso transfondo en urbanizaciones, economía urbana y derecho, 
                            aporto una mirada integral en lo que a un terreno o edificacion refiere, mí compromiso es identificar y explotar debilidades y fortalezas para 
					        tomar las decisiones precisas que el contexto demanda.
                        </p>
                    </div>

                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Urbanizaciones Sostenibles
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Abrazo la sostenibilidad en cada paso.
                            Desarrollo urbanizaciones que integran prácticas
                            ecoamigables, maximizando la armonía entre la
                            naturaleza y la vida moderna.
                        </p>
                    </div>

                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Infraestructura Urbana
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Construyo más que hogares; creo
                            infraestructuras que conectan y mejoran la vida de
                            las personas. Desde carreteras hasta parques, cada
                            detalle está diseñado para la funcionalidad y la
                            estética.
                        </p>
                    </div>

                    

                    <div className="block rounded-sm border bg-gray-900 border-gray-800 p-8 shadow-xl transition  hover:border-blue-950 hover:shadow-blue-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-2xl font-bold text-white">
                            Espacios Verdes y Recreación
                        </h2>

                        <p className="mt-1 text-base text-gray-300">
                            Diseño y desarrollo espacios verdes que no
                            solo embellecen las urbanizaciones, sino que también
                            promueven un estilo de vida activo y saludable.
                            Desde parques y senderos hasta áreas de recreación,
                            creamos entornos que fomentan la conexión con la
                            naturaleza y la comunidad.
                        </p>
                    </div>

                    
                </div>

                <div className="mt-12 mb-10 text-center">
                    <Link
                        href="/contact"
                        className="inline-block rounded bg-blue-950 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                        Contactame
                    </Link>
                </div>
            </div>
        </section>
    );
}
