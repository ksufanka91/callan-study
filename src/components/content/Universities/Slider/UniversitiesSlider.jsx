import Slider from "react-slick";
import UniversitiesSlide from "./UniversitiesSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../UI/slider/Arrow";


const UniversitiesSlider = ({universities}) => {
    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <Arrow direction={'prev'}/>,
        nextArrow: <Arrow direction={'next'}/>,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };


    return (
        <Slider {...settings}>
            {universities.map(slide => (
                    <UniversitiesSlide key={slide.id} image={slide.image} country={slide.country}
                                       quantity={slide.quantity}/>
                )
            )}
        </Slider>
    );
}

export default UniversitiesSlider;