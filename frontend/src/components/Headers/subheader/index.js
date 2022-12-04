import React, { useContext, useEffect, useState } from "react";
import ContentContext from "../../../config/ContentContext";
const SubHeader = () => {

    const theContext = useContext(ContentContext);




    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    //Pegando dados dá página titulo

    useEffect(() => {
        if (theContext.length !== 0) {

            const { attributes: { title, subtitle } } = theContext
            setTitle(title);
            setDescription(subtitle);
        }
    }, [theContext])

    return (
        <header id="header" className="header-transparent">

            <div className="sub-header2 header-bg-img header-txt-left text-white " style={{ backgroundImage: 'url(images/content/bg/5.jpg)' }}>
                <div className="sub-header-overlay bg-dark-overlay40 " style={{ paddingTop: '100px' }}>

                    <div className="container">
                        <h1 className="header-title">{title}</h1>
                        <p>{description}</p>
                    </div>

                </div>
            </div>


        </header>
    )
}

export default SubHeader;
