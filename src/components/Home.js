import React from "react";
import image from "../cool-background.png";

export default function Home(){
    return(
        <main>
            <img src={image} alt="background polygon" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-16 px-8">
                <h1 className="text-4xl text-green-110 font-bold cursive leading-none md:text-7xl lg:leading-snug lg:text-9xl"> Hei! Mitt navn er Elias Christopher Nesheim.</h1>
            </section>
        </main>
        )
}