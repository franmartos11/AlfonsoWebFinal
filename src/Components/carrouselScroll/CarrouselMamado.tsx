import Link from "next/link";
import Image from "next/image";

export default function CarrouselMamado() {
    return (
        <section className="bg-gray-900">
            <div className="h-[38rem]  bg-gray-800">
                
                <div className="container    px-6 pt-7 pb-0 mx-auto sm:pt-0 sm:pb-12 ">
                    <h1 className="text-4xl pt-16   mb-4 font-semibold text-center  capitalize lg:text-6xl text-white">
                        MIS PROYECTOS
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    
                </div>
            </div>

            <div className="container px-6 mx-auto  -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-0 xl:mt-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/foto_dos_arroyos.jpg"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                            Dos Arroyos
                        </h1>

                        <p className="mt-2   text-gray-300">
                            Desarrollo de chacras rodeadas de arroyos, el Durazno (Cba) 
                        </p>

                        <div className="flex mt-3 -mx-2">
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/arroyoHondo.jpeg"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                            Reserva privada Arroyo Hondo
                        </h1>

                        <p className="mt-2 text-gray-300">
                            Fincas con bosques y arroyos, San Javier (Cba)
                        </p>

                        <div className="flex mt-3 -mx-2">
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/don_erasmo_frente.jpeg"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold text-white">
                            Puesto Don Erasmo
                        </h1>

                        <p className="mt-2 text-gray-300 text-center">
                            Saneamiento de titulos y acondicionamiento de un rancho centenario
                        </p>

                        <div className="flex mt-3 -mx-2">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-[5rem] pt-8 ">
                
                <Link
                        href="/proyects"
                        className="inline-block rounded bg-blue-950 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                        Ver Proyectos
                    </Link>
            </div>
        </section>
    );
}
