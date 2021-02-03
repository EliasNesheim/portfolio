import React, { useEffect, useState } from "react";
import sanityClient from "../client.js"; 

import { Parallax } from "react-parallax";
import image from "../prosjekt.jpg";


export default function Project() {
    const [ProjectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
        tittel,
        dato,
        sprAk,
        beskrivelse,
        prosjektType,
        link
    }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, [])

    return (
            <Parallax bgImage={image}  alt="background polygon" strength={200}>
            <section name="Prosjekter" className="conatiner mx-auto p-10">
                <h1 className="text-5xl flex justify-center">Mine prosjekter</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Her kan du se prosjekter jeg har laget, enten for meg selv, eller for skole</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ProjectData && ProjectData.map((prosjekt, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16" key={index.toString()}>
                        <h3 className="text-lg md:text-3xl text-gray-800  font-bold mb-2 hover:text-red-700">
                            <a
                                href={prosjekt.link}
                                alt={prosjekt.tittel}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {prosjekt.tittel}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Fulført dato </strong>:{" "}
                                {new Date(prosjekt.dato).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Språk:</strong>{" "}
                                {prosjekt.sprAk}
                            </span>
                            <span>
                                <strong className="font-bold">Type:</strong>{" "}
                                {prosjekt.prosjektType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                            {prosjekt.beskrivelse}
                            </p>
                            <a href={prosjekt.link} className="text-purple-300 font-bold hover:underline hover:text-red-400 text-xl float-right">
                            lenke til prosjektet {" "}
                            <span></span>
                            </a>
                        </div>
                    </article>
                    ))}

                </section>
            </section>
            </Parallax>
    )
}