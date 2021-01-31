import React, { useEffect, useState} from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react";
import { Parallax } from "react-parallax";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
}
const inlineStyle2 = {
    background: '#fff',
    left: '50%',
    top: '20%',
    position: 'absolute',
    padding: '20px',
    radius: '15px',
    transform: 'translate(-50%, -50%)'
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
        <div name="Om">
        <Parallax  bgImage={urlFor(author.authorImage).url()} alt={author.name} strength={200}>
                <div style={{height: window.screen.height}}>
                    <div className="text-5xl">
                    <div style={inlineStyle2}>
                        Om {" "}
                        <span className="text-purple-300">{author.name}</span>
                    </div>
                    </div>
                    <div style={inlineStyle}>
                    <BlockContent blocks={author.bio} projectId="4ghgt5mo" dataset="production"/>
                    </div>
                </div>
        </Parallax>
        </div>
        )
}