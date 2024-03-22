"use client";
import AboutMeEvents from "@/Components/AboutMeEvents/AboutMeEvents";
import AboutMeMyTrayectory from "@/Components/AboutMeMyTrayectory/AboutMeMyTrayectory";
import AboutMeStudyV2 from "@/Components/AboutMeStudies/AboutMeStudyV2";
import Contact from "@/Components/Contact/Contact";
import Nav from "@/Components/HeaderNav/Nav";
import AboutUsHeader from "@/Components/about-us-header/AboutUsHeader";


export default function AboutUs() {
    return (
        <>
            <Nav page="about-me"></Nav>
            <AboutUsHeader></AboutUsHeader>
            <AboutMeMyTrayectory></AboutMeMyTrayectory>
            <div className="h-[12rem] pt-10 flex items-center justify-center bg-gray-900">
                <p className="text-3xl font-bold sm:text-6xl text-white ">
                    EVENTOS
                </p>
            </div>
            <AboutMeEvents></AboutMeEvents>
            <AboutMeStudyV2></AboutMeStudyV2>
            <Contact></Contact>
        </>
    );
}
