
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg, slug2 }) => {

    const [singelPost, setSinglePost] = useState(null);

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
        
    }

    console.log(slug2.current)
    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug2.current}"]{
                    title,
                    _id,
                    slug,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    body,
                    "name": author->name,
                    "authorImage": author->image
                }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug2.current]);

    
   

    if(!singelPost){
         return <div>Loading...</div>;
    }else {

        const dato = singelPost.publishedAt;
        const dato2 = dato.slice(0,10)
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <div className="container mx-auto object-scale-down lg: m-16" >
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white  ">
                    <div className="md: flex flex-row">
                    <motion.img src={selectedImg} alt={singelPost.title} className="max-w-xs m-4 lg:max-w-md m-10"
                        initial={{ y: "-100vh"}}
                        animate={{ y: 0}}
                    />
                    </div>
                    <div className="flex flex-row2 m-4 md:p-20">
                        <motion.div className="object-center "
                        initial={{ x: "-100vh"}}
                        animate={{ x: 0}}>
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                {singelPost.title}
                            </h1>
                            <h1 className="cursive text-xl lg:text-2xl mb-4">
                                {dato2}
                            </h1>
                            <BlockContent blocks={singelPost.body} projectId="4ghgt5mo" dataset="production" />
                        </motion.div>
                    </div>
                </article>
            </div>
        </motion.div>
    )
    }
}
export default Modal;