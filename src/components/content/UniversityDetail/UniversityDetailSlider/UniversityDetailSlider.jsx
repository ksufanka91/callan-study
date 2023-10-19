import Slider from "react-slick";
import styles from "./UniversityDetailSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../UI/slider/Arrow";

const UniversityDetailSlider = ({universities}) => {
    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow direction={'prev'}/>,
        nextArrow: <Arrow direction={'next'}/>,

        responsive: [
            {
                breakpoint: 430,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <Slider className={styles.slider} {...settings}>
            {universities.gallery.map((slide, index) => (
                <div className={styles.slideContainer}>
                    <img src={slide} alt={slide} key={index} className={styles.image}/>
                </div>
                )
            )}
        </Slider>
    );
};

export default UniversityDetailSlider;