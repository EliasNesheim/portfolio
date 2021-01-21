import React, {useState} from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import { useMediaQuery } from 'react-responsive';


export default function NavBar() {
    const [showBunger, setShowBunger] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 1022px)` });

    let bunger

    if(showBunger||isMobile !== true){
        bunger = 
        <div className="w-full block flex-row flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <NavLink to="/post" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    DevLog
                </NavLink>
                <NavLink to="/project" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Prosjekter
                </NavLink>
                <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                    Om meg!
                </NavLink>
            </div>
            <div className="inline-flex pt-3 px-6 my-0">
                <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://github.com/EliasNesheim" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 35, width: 35}} />
            </div>
        </div>
    }
    return (
        <header className="bg-red-600">
            <div className="container">
                
                <nav className="flex flex-wrap justify-between bg-teal p-6">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
                        <NavLink to="/" className="font-semibold text-xl tracking-tight">Elias</NavLink>
                    </div>
                    <button onClick={() => setShowBunger(!showBunger)} className="w-8 h-8 place-self-end lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                
                { bunger }
                </nav>
                
                
            </div>
        </header>
    )
}