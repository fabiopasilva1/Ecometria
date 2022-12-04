import React, { useEffect, useState } from 'react';

import Helmet from 'react-helmet';



const Seo = (props) => {



    const { val } = (props !== undefined) ? props : '';

    const { title, author, charset, description, face_og_description, face_og_title, id, keywords, twitter_description, twitter_title } = val;

    const [DataSEO, SetDataSeo] = useState([]);


    useEffect(() => {
        if (val.length === 0) {
            SetDataSeo(
                {
                    "title": 'Ecometria',
                    "id": 1,
                    "charset": "UTF-8",
                    "description": 'Telemetria, Telemedição e Telecomando em Tempo Real',
                    "keywords": "Telemetria, Telemedição e Telecomando em Tempo Real",
                    "author": "ecometria",
                    "face_og_title": "Ecometria",
                    "face_og_description": "Telemetria, Telemedição e Telecomando em Tempo Real",
                    "twitter_title": "Ecometria",
                    "twitter_description": "Telemetria, Telemedição e Telecomando em Tempo Real"
                }
            )
        }
        if (val.length !== 0) SetDataSeo({

            "title": title,
            "id": id,
            "charset": charset,
            "description": description,
            "keywords": keywords,
            "author": author,
            "face_og_title": face_og_title,
            "face_og_description": face_og_description,
            "twitter_title": twitter_title,
            "twitter_description": twitter_description
        })
    }, [])



    const [hel, setHel] = useState([])


    function ReadData() {
        setHel(
            <Helmet>
                <meta charset={(props.charset === undefined) ? DataSEO.charset : props.charset} />
                { /* Standard metadata tags */}
                <title>{(props.title === undefined) ? DataSEO.title : props.title}</title>

                <meta name='description' content={(props.description === undefined) ? DataSEO.description : props.description} />
                <meta name='keywords' content={(props.keywords === undefined) ? DataSEO.keywords : props.keywords} />
                <meta name="author" content={(props.author === undefined) ? DataSEO.author : props.author}></meta>
                { /* End standard metadata tags */}

                { /* Facebook tags */}

                <meta property="og:title" content={(props.title === undefined) ? DataSEO.title : props.title} />
                <meta property="og:description" content={(props.description === undefined) ? DataSEO.description : props.description} />
                { /* End Facebook tags */}
                { /* Twitter tags */}

                <meta name="twitter:title" content={(props.title === undefined) ? DataSEO.title : props.title} />
                <meta name="twitter:description" content={(props.description === undefined) ? DataSEO.description : props.description} />

                { /* End Twitter tags */}



            </Helmet>
        )
    }
    useEffect(() => {
        if (DataSEO.length !== 0) ReadData();
    }, [DataSEO])


    return (<>
        {hel}
    </>


    )
}

export default Seo;