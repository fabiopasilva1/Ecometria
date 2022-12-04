import HTMLReactParser from "html-react-parser";
import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";

import ContentContext from "../../config/ContentContext";
import Contato from "../contato";

const SectionsPage = () => {

    const [dataSection, setDataSections] = useState([]);
    const [dataSection_two, setDataSection_two] = useState([]);

    const theContext = useContext(ContentContext)
    function getComponents() {
        if (theContext.length !== 0) {

            const { attributes: { Section, Section_two, } } = theContext;

            setDataSections(Section);
            setDataSection_two(Section_two);

        }
    }

    useEffect(() => {
        if (theContext.length !== 0) getComponents();
    }, [theContext])

    if (theContext.length !== 0 && theContext.attributes.slug !== 'contato') {
        return (
            <Fragment>
                <div className="row section">
                    <div className="container">

                        {(dataSection.length !== 0) &&
                            // eslint-disable-next-line
                            dataSection.map((s) => {
                                if (s.__component === 'sections.content') {
                                    return (
                                        <div key={s.id} >  {HTMLReactParser(s.content)}</div>
                                    )
                                }
                                if (s.__component === 'sections.two-col') {
                                    return (
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {HTMLReactParser(s.col_one)}
                                            </div>
                                            <div className="col-sm-6">
                                                {HTMLReactParser(s.col_two)}
                                            </div>
                                        </div>
                                    )
                                }
                                if (s.__component === 'sections.three-col') {
                                    return (
                                        <div className="row">
                                            <div className="col-sm-4">
                                                {HTMLReactParser(s.col_one)}
                                            </div>
                                            <div className="col-sm-4">
                                                {HTMLReactParser(s.col_two)}
                                            </div>
                                            <div className="col-sm-4">
                                                {HTMLReactParser(s.col_three)}
                                            </div>
                                        </div>
                                    )
                                }
                            })





                        }

                    </div>

                </div>
                <div className="row section_two">
                    <div className="container">
                        {(dataSection_two.length !== 0) &&
                            dataSection_two.map(
                                // eslint-disable-next-line 
                                (s) => {
                                    if (s.__component === 'sections.content') {
                                        return HTMLReactParser(s.content)
                                    }
                                    if (s.__component === 'sections.two-col') {
                                        return (
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    {HTMLReactParser(s.col_one)}
                                                </div>
                                                <div className="col-sm-6">
                                                    {HTMLReactParser(s.col_two)}
                                                </div>
                                            </div>
                                        )
                                    }
                                    if (s.__component === 'sections.three-col') {
                                        return (
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    {HTMLReactParser(s.col_one)}
                                                </div>
                                                <div className="col-sm-4">
                                                    {HTMLReactParser(s.col_two)}
                                                </div>
                                                <div className="col-sm-4">
                                                    {HTMLReactParser(s.col_three)}
                                                </div>
                                            </div>
                                        )
                                    }
                                })





                        }
                    </div>

                </div>
            </Fragment>

        )
    } else if (theContext.length !== 0 && theContext.attributes.slug === "contato") {

        return <Contato />
    }

}

export default SectionsPage;