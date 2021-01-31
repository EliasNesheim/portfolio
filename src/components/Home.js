import React from "react";
import image from "../home3.jpg";
import {SocialIcon} from "react-social-icons";
import { Parallax } from "react-parallax";

const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
}

export default function Home(){
    return(
        <Parallax bgImage={image} alt="background polygon" strength={400}>
            <section style={{height: window.screen.height}}>
                 <div style={inlineStyle} > Hei! Mitt navn er Elias Christopher Nesheim.</div>
            </section>
            <div className="flex justify-center mt-20 i mb-20">
                    <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                    <SocialIcon url="https://github.com/EliasNesheim" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                    <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 60, width: 60}} />
                    <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 60, width: 60}} />
                </div>
        </Parallax>
        )
}