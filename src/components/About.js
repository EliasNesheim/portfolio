import React, { useEffect, useState} from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const[author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>error :/</div>

    return (
        <main className="bg-gradient-to-b from-red-200 to-yellow-200 relative">
            <div className="p-10 lg:pt-20 container mx-auto relative">
                <section className="bg-green-800 max-h-xl rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded bilde max-w-xs  lg:max-w-xl mr-7" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose:xl text-white">
                            <BlockContent blocks={author.bio} projectId="4ghgt5mo" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        )
}