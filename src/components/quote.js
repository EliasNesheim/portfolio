import React from "react"

export default function Quote() {
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

    
    return(

    )
}