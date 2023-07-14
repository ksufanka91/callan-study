import Slider from "react-slick";
import StudentsSlide from "./StudentsSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../UI/slider/Arrow";

import styles from './StudentsSlider.module.scss';

const StudentsSlider = ({students}) => {
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
        <Slider className={styles.slider} {...settings}>
            {students.map(slide => <StudentsSlide key={slide.id} image={slide.image}/>)}
        </Slider>
    );
}

export default StudentsSlider;