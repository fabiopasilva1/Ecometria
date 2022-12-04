import React, { Fragment } from 'react'
import './css/slider.css'

const Slider = () => {

    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slider-wrapper");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    if (nextButton !== null) {
        nextButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        });

    }
    if (prevButton !== null) {
        prevButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft -= slideWidth;
        });
    }



    return (
        <section className="slider-wrapper">
            <button className="slide-arrow" id="slide-arrow-prev">
                &#8249;
            </button>
            <button className="slide-arrow" id="slide-arrow-next">
                &#8250;
            </button>
            <div className="slides-container" id="slides-container">



                <div className="slide"><h1>Olá mundo</h1></div>
                <div className="slide"></div>
                <div className="slide"></div>

            </div>

        </section>
    )
}

export default Slider