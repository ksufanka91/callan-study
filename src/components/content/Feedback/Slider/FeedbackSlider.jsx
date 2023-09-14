import Slider from "react-slick";
import FeedbackSlide from "./FeedbackSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../UI/slider/Arrow";

import styles from './FeedbackSlider.module.scss';


const FeedbackSlider = ({feedback}) => {
    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <Arrow direction={'prev'}/>,
        nextArrow: <Arrow direction={'next'}/>,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <Slider className={styles.slider} {...settings}>
            {feedback.map(slide => (
                    <FeedbackSlide key={slide.id} image={slide.image} title={slide.title} text={slide.text}/>
                )
            )}
        </Slider>
    );
}

export default FeedbackSlider;