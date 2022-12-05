import React, { Fragment, useContext, useEffect, useState } from 'react'
import { PageContext } from '../context/contextContent'
import Container from './componentPages/Container'
import { useParams } from 'react-router-dom';
import SectionComponents from './componentPages/SectionComponents'
import HTMLReactParser from 'html-react-parser'
import './styles/ionicons.min.css'
import Page404 from './Page404';

const Content = () => {
    const contentContext = useContext(PageContext);
    const [content, setContent] = useState([])
    const [hide, setHide] = useState('hide')
    const url = (useParams().slug);

    const { related } = contentContext
    useEffect(() => {
        (related) && related.Section.map((sec) => {

            if (sec.__component === 'sections.content') {
                //  console.log(sec.content)
                setContent(sec.content);
                setHide('')

            }
        })

    }, [related, url])

    // console.log(related)


    return (
        <Fragment>
            <SectionComponents />
            <Container>
                {(content.length !== 0) && HTMLReactParser(content)}
                {console.log(related)}
                {(related && related.Components.length === 0 && related.Section.length === 0) && <Page404 />}
            </Container>
        </Fragment>

    )
}

export default Content