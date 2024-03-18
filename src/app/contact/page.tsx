"use client";
import Contact from "@/Components/Contact/Contact";
import ContactCard from "@/Components/Contact/ContactCard";
import ContactCardImg from "@/Components/Contact/ContactCardImg";
import Nav from "@/Components/HeaderNav/Nav";

export default function ContactUs(){
    return(
        <div>
            <Nav page='contact'></Nav>
            <ContactCardImg></ContactCardImg>
        </div>
    )
}