const squareData = [
    {
        id: 1,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/vertical-arroyo.jpg",
    },
    {
        id: 2,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/slider-img-e1690579354218.jpg",
    },
    {
        id: 3,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/actividades-e1690579332589.png",
    },
    {
        id: 4,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/laguna.jpg",
    },
    {
        id: 5,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/atardeceres.png",
    },
    {
        id: 6,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/pinares-e1690579305107.jpg",
    },
    {
        id: 7,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos.jpg",
    },
    {
        id: 8,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/arroyos2.jpg",
    },
    {
        id: 9,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/vertical-arroyo.jpg",
    },
    {
        id: 10,
        src: "https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/wide.jpg",
    },
    {
        id: 11,
        src: "https://noasur.conicet.gov.ar/wp-content/uploads/sites/101/2023/04/1.-HIGHLANDS-PAISAJE-VALLES.jpg",
    },
    {
        id: 12,
        src: "https://nuncadejesdeviajar.com/wp-content/uploads/2021/06/IMG_0570.jpg",
    },
    {
        id: 13,
        src: "https://nuncadejesdeviajar.com/wp-content/uploads/2021/06/IMG_20210218_145156990_HDR.jpg",
    },
    {
        id: 14,
        src: "https://7madiario.com.ar/new/wp-content/uploads/2020/10/valle.jpg",
    },
    {
        id: 15,
        src: "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/01/18141124/valle-calamuchita.jpg",
    },
    {
        id: 16,
        src: "https://26329602f.blogs.upv.es/files/2023/01/infraestructura-wide.jpg",
    },
];
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";

const HeaderProyect = () => {
    return (
        <section className="w-full px-8 pt-[10rem] pb-[18rem] grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto animate-fade-up animate-once animate-duration-[1700ms]">
            <div>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    CONOCE SOBRE MIS PROYECTOS
                </h3>
                <p>
                    <br />
                </p>
                <a
                    className="inline-block rounded  bg-blue-950 px-12 hover:bg-blue-900 pt-4 pb-3.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                >
                    Contáctame
                </a>
            </div>
            <ShuffleGrid />
        </section>
    );
};

interface Square {
    id: number;
    src: string;
}

const shuffle = ({ array }: { array: Square[] }): Square[] => {
    if (!array || !Array.isArray(array) || array.length === 0) {
        console.error("Invalid array provided for shuffling");
        return [];
    }

    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        if (
            typeof array[currentIndex] !== "undefined" &&
            typeof array[randomIndex] !== "undefined"
        ) {
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
    }

    return array;
};

const generateSquares = () => {
    return shuffle({ array: squareData }).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [squares, setSquares] = useState<React.ReactNode[]>(
        generateSquares()
    );

    useEffect(() => {
        const shuffleSquares = () => {
            setSquares(generateSquares());

            timeoutRef.current = setTimeout(shuffleSquares, 3000);
        };

        shuffleSquares();

        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 5000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 ">
            {squares.map((sq, index) => (
                <React.Fragment key={index}>{sq}</React.Fragment>
            ))}
        </div>
    );
};

export default HeaderProyect;
