import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justfiy-between">
                <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <NavLink to="/" className="font-semibold text-xl tracking-tight">Elias</NavLink>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <NavLink to="/post" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        DevLog
                    </NavLink>
                    <NavLink to="/project" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Projecter
                    </NavLink>
                    <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Om meg!
                    </NavLink>
                    </div>
                    <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 35, width: 35}} />
                </div>
                </div>
                </nav>
                
                
            </div>
        </header>
    )
}