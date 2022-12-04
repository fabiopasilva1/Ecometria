import React, { Fragment, useContext } from 'react'
import { SliderPro } from '../../components/SliderPro'
import { PageContext } from '../../context/contextContent'
import Buynow from './Buynow'
import Features from './Features'
import Highlight from './Highlight'
import Testimonials from './Testimonials'

const SectionComponents = () => {

    return (
        <Fragment>
            <SliderPro />
            <Features />
            <Highlight />
            <Testimonials />
        </Fragment>
    )
}

export default SectionComponents