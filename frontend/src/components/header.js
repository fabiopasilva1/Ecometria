
import React, { useContext, useEffect, useState } from 'react';
import SubHeader from "./Headers/subheader";
import { useParams } from "react-router-dom";
import { Fragment } from "react"
import ContentContext from '../config/ContentContext';
import Seo from "./SEO"



const Header = ({ children }) => {



    const [getDataSeo, setDataPage] = useState([])
    const theContext = useContext(ContentContext)




    let { pageName } = useParams();
    function compSubHeader() {

        if (theContext.attributes !== undefined)
            if (theContext.attributes.SubHeader === true) {
                return <SubHeader />
            }

    }
    const classPage = (pageName !== undefined) ? 'header-page' : undefined;

    useEffect(() => {
        if (getDataSeo.length === 0 && theContext.length !== 0) getSEO();
    }, [theContext])


    const getSEO = () => {


        // eslint-disable-next-line
        theContext.attributes.DataSEO.map((s) => {


            setDataPage(s)
        }
        )

    }

    return (<Fragment>
        <Seo val={getDataSeo} />
        <header id="header" className={classPage}>

            {/** Slider Pro */}
            {children}


        </header>

        {compSubHeader()}
    </Fragment>
    )

}

export default Header;