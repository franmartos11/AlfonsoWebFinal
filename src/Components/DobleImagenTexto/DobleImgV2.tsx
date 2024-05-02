import Image from "next/image";
export default function DobleImgV2() {
    return (
        <section className="bg-gray-900 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-white">
                        Proyectos en Desarrollo
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-300">
                        Conoce en lo que estoy trabajando
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            LOTEO RESIDENCIAL EN VILLA MARIA
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Goza de una excelente ubicación estratégica dentro
                            de la ciudad, con cercanía al río. Estoy trabajando
                            en un loteo residencial que ofrecerá servicios
                            completos y de alta gama en esta localidad. Cabe
                            destacar que Villa María es la tercera ciudad más
                            importante de la provincia de Córdoba, Argentina, y
                            cabecera del departamento General San Martín.
                        </p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/villa_maria.webp"
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
