import React, { Fragment, useContext } from 'react'
import { SliderPro } from '../components/SliderPro'
import { ContextContent } from '../context/contextContent'
import Buynow from './componentPages/Buynow'
import Features from './componentPages/Features'
import Highlight from './componentPages/Highlight'
import Testimonials from './componentPages/Testimonials'


const Home = () => {

    return (
        <Fragment>
            <SliderPro />
            <Features />
            <Highlight />
            <Buynow />
            <Testimonials />
        </Fragment>

    )
}

export default Home