import React, {useState} from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import { useMediaQuery } from 'react-responsive';
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
    const [showBunger, setShowBunger] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 1022px)` });

    let bunger

    if(showBunger||isMobile !== true){
        bunger = 
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-md m-8">
                <Link to="Prosjekter" spy={true} smooth={true} duration={500} className=" text-teal-lighter hover:text-white mr-4">
                        Prosjekter
                </Link>
                <Link to="Om" spy={true} smooth={true} duration={500} className=" text-teal-lighter hover:text-white mr-4">
                        Om meg!
                </Link>
                <Link to="DevLog" spy={true} smooth={true} duration={500} className="text-teal-lighter hover:text-white mr-4">
                    DevLog
                </Link>               
            </div>
            <div className="inline-flex flex-row-reverse pt-3 px-6 m-5">
                <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://github.com/EliasNesheim" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 35, width: 35}} />
            </div>
        </div>
    }
    return (
        <header className="bg-white">
            
                
                <nav>
                    <div className="flex flex-row-reverse">
                        <button onClick={() => setShowBunger(!showBunger)} className="w-12 h-12 m-2 object-right  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                { bunger }
                </nav>
        </header>
    )
}