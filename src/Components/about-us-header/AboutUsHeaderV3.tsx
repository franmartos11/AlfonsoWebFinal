import Image from "next/image";
export default function AboutUsHEADERv3() {
    return (
        <section className="sm:mb-[1rem] lg:mb-[16rem] ">
            <span className=" [&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-light"
                            x1="0"
                            x2="0"
                            y1="1"
                            y2="0"
                        >
                            <stop
                                stop-color="hsl(209, 92.2%, 92.1%)"
                                offset="0%"
                            ></stop>
                            <stop
                                stop-color="hsl(209, 92.2%, 99.1%)"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-dark)"
                        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
                    ></path>
                </svg>
                <svg
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-dark"
                            x1="0"
                            x2="0"
                            y1="9"
                            y2="0"
                        >
                            <stop
                                stop-color="hsl(232, 65%, 20%)"
                                offset="0%"
                            ></stop>
                            <stop
                                stop-color="hsl(220, 38%, 11%)"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-dark)"
                        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
                    ></path>
                </svg>
            </span>

            <div className="sm:px-2 md:px-6 pt-[7rem] pb-12 text-center lg:my-12 lg:text-left animate-fade-up animate-once animate-duration-[1700ms]">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-0 lg:mt-0">
                            <h1 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                Alfonso Lozita <br />
                                <span className="text-primary text-blue-950">
                                    Urbanizaciones
                                </span>
                            </h1>
                            <p className="mb-0 p-2 text-gray-900 text-xl">
                                Como emprendedor inmobiliario especializado en urbanizaciones, desarrollo espacios habitables que poseen un estándar de excelencia y profesionalismo. Ofreciendo desde chacras en montañas hasta lotes residenciales en la ciudad. 
                            </p>
                            <div className="flex items-center space-x-4 m-4 mx-0 justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start ">
                                <a
                                    href="/https://www.instagram.com/alfo_lozita/"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        className="h-6"
                                    >
                                        <circle cx="15" cy="15" r="4" />
                                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alfonso-lozita-9b8920222/?originalSubdomain=ar"
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        className="h-6"
                                    >
                                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/5493534143284?text=Hola,%20quiero%20enviar%20un%20mensaje%20a%20trav%C3%A9s%20de%20WhatsApp."
                                    className="text-blue-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6"
                                    >
                                        <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <Image
                                src="/alfonso3.webp"
                                className="w-[100%]  rounded-lg shadow-lg shadow-black/20"
                                alt="alfonso"
                                width={612}
                                height={612}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
