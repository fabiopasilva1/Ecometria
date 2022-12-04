import React, { useContext, useEffect, useState } from "react";
import ContentContext from "../../../config/ContentContext";

const Breadcrumbs = () => {


    const theContext = useContext(ContentContext);
    const [title, setTitle] = useState('')

    //Pegando dados dá página titulo

    //console.log(theContext)
    useEffect(() => {
        if (theContext.length !== 0) {
            const { attributes: { title, } } = theContext
            setTitle(title);

        }
    }, [theContext])


    return (
        <div className="sub-header">


            <div className="container">

                <h4 className="header-title">{title}</h4>
                <div className="breadcrumbs">
                    <a href="/">Home</a> <span className="sep">/</span> <span className="current">{title}</span>
                </div>

            </div>


        </div>
    )
}

export default Breadcrumbs;