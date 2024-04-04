export default function FooterV2() {
    return (
        <footer className="bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="/">                   
                        <span className=" w-auto h-7 self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Alfonso Lozita
                    </span>
                    </a>
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a
                            href="/"
                            className="mx-4 text-sm  transition-colors duration-300  text-gray-300 hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Home{" "}
                        </a>
                        <a
                            href="/proyects"
                            className="mx-4 text-sm  transition-colors duration-300  text-gray-300 hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Proyectos{" "}
                        </a>
                        <a
                            href="/about-me"
                            className="mx-4 text-sm  transition-colors duration-300  text-gray-300 hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Sobre Mi{" "}
                        </a>

                        <a
                            href="/contact"
                            className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            {" "}
                            Contactame{" "}
                        </a>

                        
                    </div>
                </div>

                <hr className="my-6  md:my-10 border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-300">
                       All Rights Reserved.
                    </p>

                    <div className="flex -mx-2 text-gray-300">
                        <a href="https://www.aspasoftware.com">Designed By Aspa Software</a>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
