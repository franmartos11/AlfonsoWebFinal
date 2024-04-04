import Image from "next/image";
export default function MoreProyects() {
    return (
        <section className="bg-gray-800 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-white">
                        OTROS PROYECTOS
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-300">
                        Conoce más sobre mis trabajos
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            RESERVA PRIVADA ARROYO HONDO
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Proyecto inmobiliario exclusivo que ofrece fincas rodeadas de bosques, arroyos y vistas panorámicas al Valle de Traslasierras. Ubicadas en San Javier, al pie del cerro Champaquí, y a 9 km de la plaza principal del emblemático pueblo Villa de Las Rosas 
                        </p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/arroyoHondo2.png"
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
                            En las montañas, entre bosques y arroyos, se encuentra un campo que alberga un icónico rancho centenario construido con barro y piedra. Me hice cargo de la totalidad del proyecto, responsabilizándome de la compra del campo y el saneamiento de los títulos, la creación del camino de ingreso, el alambrado perimetral y la restauración de la edificación del siglo pasado.
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
                            VIVIENDA EN BARRIO LAS ROSAS CBA
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Tras la designación de arquitectos y constructores para el proyecto, acompañé de cerca el proceso completo de construcción y venta de una vivienda urbana en el barrio Las Rosas. Participé en la elección del lote, el diseño y el financiamiento del mismo, así como también estuve presente en el proceso de construcción. 
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
