"use client";
import Contact from "@/Components/Contact/Contact";
import Nav from "@/Components/HeaderNav/Nav";
import ImageWithContent from "@/Components/ImageWithContent/ImageWithContent";
import Testimonials from "@/Components/Testimonials/Testimonials";
import TestimonialsArt from "@/Components/Testimonials/TestimonialsArt";
import TestimonialsCustom from "@/Components/Testimonials/TestimonialsCustom";
import TestimonialsTres from "@/Components/Testimonials/TestimonialsTres";
import AboutUsHEADERv3 from "@/Components/about-us-header/AboutUsHeaderV3";
import CarrouselMamado from "@/Components/carrouselScroll/CarrouselMamado";
import HorizontalScrollCarousel from "@/Components/carrusel/HorizontalScrollCarousel";
import ServicesDisplay from "@/Components/servicesDisplay/ServicesDisplay";


export default function Home() {
    return (
        <>
            <Nav page='home'></Nav>
            <AboutUsHEADERv3></AboutUsHEADERv3>
            <ServicesDisplay></ServicesDisplay>
            <ImageWithContent></ImageWithContent>
            <HorizontalScrollCarousel></HorizontalScrollCarousel>
            <CarrouselMamado></CarrouselMamado>
            <TestimonialsCustom></TestimonialsCustom>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );
}
