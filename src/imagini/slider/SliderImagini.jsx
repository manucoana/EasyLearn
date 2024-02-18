import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderImagini.css";
import a from "./a.jpg";
import b from "./b.jpg";

const SliderImagini = ({children}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-items">
            {children}
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="slider-item">
                        <img src={a} alt="Imagine 1" />
                    </div>
                    <div className="slider-item">
                        <img src={b} alt="Imagine 2" />
                    </div>
                </Slider>
            </div></div>
    );
};

export default SliderImagini;
