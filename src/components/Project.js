import React, { useEffect, useState } from "react";
import sanityClient from "../client.js"; 

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
        <main className="bg-green-100 min-h-screen p-12">
            <section className="conatiner mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Mine prosjekter</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Her kan du se prosjekter jeg har laget, enter for meg selv, eller for skole</h2>
                <section className="grid grid-cols-2 gap-8">
                    {ProjectData && ProjectData.map((prosjekt, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
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
                            <a href={prosjekt.link} className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl float-right">
                            lenke til prosjektet {" "}
                            <span></span>
                            </a>
                        </div>
                    </article>
                    ))}

                </section>
            </section>
        </main>
    )
}