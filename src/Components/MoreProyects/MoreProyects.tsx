import Image from "next/image";
export default function MoreProyects() {
    return (
        <section className="bg-gray-800 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-white">
                        Otros proyectos 
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-300">
                        Conoce más de mi trabajo
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            RESERVA PRIVADA ARROYO HONDO
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Es un proyecto inmobiliario sobre unas fincas ubicadas en San Javier, a pie del Cerro Champaquí 
                            y a 9 kilómetros de la plaza principal del emblemático pueblo Villa de Las Rosas. Trabajé sobre 
                            unas fincas con bosques, viñedos y arroyos, rodeadas de vistas panorámicas a todo el Valle de Traslasierras.    
                        </p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/arroyo_hondo.JPG"
                            alt="Villa María, Córdoba, Argentina"
                            className="mx-auto rounded-lg shadow-lg bg-gray-500"
                            width={612}
                            height={612}
                        ></Image>
                    </div>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            PUESTO DON ERASMO
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Situado en El Durazno, realicé el saneamiento y planeamiento de un campo 
                            que contiene un icónico rancho centenario hecho barro y piedra. Me encargué de totalidad 
                            del proyecto, haciéndome responsable desde la compra del campo y el saneamiento 
                            de los títulos, hasta la creación del camino de ingreso al mismo, el alambrado 
                            perimetral y restauracion de la edificación del siglo pasado.
                        </p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/puesto_don_erasmo.jpeg"
                            alt="Villa María, Córdoba, Argentina"
                            className="mx-auto rounded-lg shadow-lg bg-gray-500"
                            width={612}
                            height={612}
                        ></Image>
                    </div>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            CASA EN BARRIO LAS ROSAS, VILLA NUEVA CORDOBA
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Acompañé cercanamente todo el proceso de construcción y 
                            venta de una vivienda urbana en Barrio Las Rosas. Fui 
                            partícipe de la elección del lote, diseño y financiamiento 
                            del mismo, así como también estuve presente en el proceso de construcción.    
                        </p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/casa_barrio_las_rosas.jpeg"
                            alt="Villa María, Córdoba, Argentina"
                            className="mx-auto rounded-lg shadow-lg bg-gray-500"
                            width={612}
                            height={612}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}
