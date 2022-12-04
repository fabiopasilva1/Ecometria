import HTMLReactParser from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import ContentContext from "../../config/ContentContext";
import '../assets/css/index.css'
const PageContent = () => {

    const theContext = useContext(ContentContext)
    // eslint-disable-next-line
    const [dataContent, setDataContent] = useState([]);
    // eslint-disable-next-line
    const [dataComponents, setDataComponents] = useState([]);
    const [dataSection, setDataSection] = useState([]);
    const [dataSection_two, setDataSection_two] = useState([]);


    //console.log(dataComponents);


    //console.log(dataSection)


    // console.log(dataSection_two);


    function getComponents() {
        if (theContext.attributes !== undefined) {
            if (theContext.attributes.Components.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Components.map((Component) => {
                    setDataComponents(Component);
                })

            }

            if (theContext.attributes.Section.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Section.map((Section) => {
                    setDataSection(Section);
                })

            }

            if (theContext.attributes.Section_two.length !== 0) {
                // eslint-disable-next-line
                theContext.attributes.Section_two.map((Section_two) => {
                    setDataSection_two(Section_two);
                })

            }
        }
    }

    useEffect(() => {
        if (theContext !== undefined) getComponents()
    }, [])


    return (
        <div id="content">

            <div className="container padding-top80 padding-bottom40">

                {(dataSection.content !== undefined) &&

                    <div className="col-sm-12">
                        {console.log(dataSection.content)}
                        {HTMLReactParser(dataSection.content)}
                    </div>
                }
            </div>

            {/* console.log(dataSection_two)*/}
            {(dataSection_two.content !== undefined) &&
                <div className="row section_two">


                    <div className="col-sm-12">

                        {HTMLReactParser(dataSection_two.content)}

                    </div>
                </div>
            }

        </div >







    )
}

export default PageContent;