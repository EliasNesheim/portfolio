import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justfiy-between">
                <nav className="flex">
                    <NavLink
                    to ="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Elias
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 mr-4 text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        devLog
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 mr-4 text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Projecter
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 mr-4 text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Om meg!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/elias-nesheim-256636162/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://open.spotify.com/playlist/7k6yDXPWLazvkCERu2gNw6?si=mbfp7y40RnG913pQ2I5OoQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="mailto:Elias.Nesheim@gmail.com" className="mr-4" target="_blank" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}