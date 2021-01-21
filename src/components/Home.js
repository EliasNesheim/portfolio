import React from "react";
import image from "../cool-background.png";
import {SocialIcon} from "react-social-icons";

export default function Home(){
    return(
        <main>
            <img src={image} alt="background polygon" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center pt-12 lg:pt-16 px-8">
                <h1 className="text-4xl text-green-110 font-bold cursive leading-none md:text-7xl lg:leading-snug lg:text-9xl"> Hei! Mitt navn er Elias Christopher Nesheim.</h1>
            </section>
            <div className="flex justify-center mt-20">
                <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                <SocialIcon url="https://github.com/EliasNesheim" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 60, width: 60}} />
            </div>
            
                
            
        </main>
        )
}