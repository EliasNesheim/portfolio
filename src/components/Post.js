import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { motion } from 'framer-motion'


export default function Post({ setSelectedImg, setSlug2 }) {
    const [postData, setPost] = useState(null);
    

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] | order(publishedAt desc) {
                    title,
                    slug,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

   
    
    return (
        
        <main name="DevLog" className="purplebg min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center ">DevLog</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Velkomen til min side med poster.</h2>
                <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <motion.span className="block h-64 relative rounded shadow leading-snug bg-white border-green-400 opacity-80" key={index}
                            whileHover={{ opacity: 1}}
                            onClick={() => {
                                setSelectedImg(post.mainImage.asset.url);
                                setSlug2(post.slug);
                                }
                            }
                        >
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-purple-300  bg-opacity-75 rounded">
                                    {post.title}
                                </h3>
                            </span>
                        </motion.span>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}