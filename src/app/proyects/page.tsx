'use client'
import CardProyect from "@/Components/CardProyect/CardProyect";
import CardProyectImgGrid from "@/Components/CardProyect/CardProyectImgGrid";
import Contact from "@/Components/Contact/Contact";
import DobleImgV2 from "@/Components/DobleImagenTexto/DobleImgV2";
import Nav from "@/Components/HeaderNav/Nav";
import HeaderProyect from "@/Components/HeaderProyects/HeaderProyect";
import MoreProyects from "@/Components/MoreProyects/MoreProyects";


export default function Proyects() {
    return (
        <div>
            <Nav page='proyects'></Nav>
            <HeaderProyect></HeaderProyect>
            <CardProyect></CardProyect>
            <CardProyectImgGrid></CardProyectImgGrid>
            <MoreProyects></MoreProyects>
            <DobleImgV2></DobleImgV2>
            <Contact></Contact>
        </div>
    )
}
