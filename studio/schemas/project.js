export default{
    name:"project",
    titl: "Project",
    type: "document",
    fields: [
        {
            name: "tittel",
            type: "string"
        },
        {
            name: "dato",
            type: "datetime"
        },
        {
            name: "sprAk",
            type: "string"
        },
        {
            name: "beskrivelse",
            type: "text"
        },
        {
            name: "prosjektType",
            title: "Prosjekt type",
            type: "string",
            options: {
                list: [
                    {value: "personlig", title: "Personlig"},
                    {value: "skole", title: "Skole"},
                    {value: "jobb", title: "Jobb"},
                ]
                    
                
            }
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                layout: "tags",
            },
        }
    ]
}