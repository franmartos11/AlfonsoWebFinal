"use client";
import AboutMeEvents from "@/Components/AboutMeEvents/AboutMeEvents";
import AboutMeMyTrayectory from "@/Components/AboutMeMyTrayectory/AboutMeMyTrayectory";
import AboutMeStudy from "@/Components/AboutMeStudies/AboutMeStudy";
import AboutMeTimeLine from "@/Components/AboutMeTimeLine/AboutMeTimeLine";
import AboutUsStudy from "@/Components/AboutUsStudy/AboutUsStudy";
import Contact from "@/Components/Contact/Contact";
import DobleImg from "@/Components/DobleImagenTexto/DobleImg";
import Nav from "@/Components/HeaderNav/Nav";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import TransitionCard from "@/Components/TransitionCard/TransitionCard";
import AboutUsHeader from "@/Components/about-us-header/AboutUsHeader";
import AboutUsHeaderV2 from "@/Components/about-us-header/AboutUsHeaderV2";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import AboutUsHeaderV5 from "@/Components/about-us-header/AboutUsHeaderV5";
import Card from "@/Components/card/Card";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import DatosInteres from "@/Components/datosInteres/DatosInteres";
import Footer from "@/Components/footer/Footer";
import Heroe from "@/Components/heroSections/Hero";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";

export default function AboutUs() {
    return (
        <>
            <Nav page="about-me"></Nav>
            <AboutUsHeader></AboutUsHeader>
            <AboutMeMyTrayectory></AboutMeMyTrayectory>
            <div className="h-[12rem] pt-10 flex items-center justify-center bg-gray-900">
                <p className="text-3xl font-bold sm:text-6xl text-white ">
                    Eventos
                </p>
            </div>

            <AboutMeEvents></AboutMeEvents>
            <div className="h-[10rem] pt-10 flex items-center justify-center bg-gray-800">
                <p className="text-3xl font-bold sm:text-6xl text-white ">
                    Mi Trayectoria Profecional
                </p>
            </div>
            <AboutMeStudy></AboutMeStudy>

            <Contact></Contact>
        </>
    );
}
