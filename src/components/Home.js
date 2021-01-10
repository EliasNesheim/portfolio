import React from "react";
import image from "../cool-background.png";

export default function Home(){
    return(
        <main>
            <img src={image} alt="background polygon" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-110 font-bold cursive leading-none lg:leading-snug home-name"> Hei! Mitt navn er Elias Christopher Nesheim.</h1>
            </section>
        </main>
        )
}