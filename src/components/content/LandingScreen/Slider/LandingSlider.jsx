import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingSlide from "./LandingSlide";
import styles from "./LandingSlider.module.scss";


const LandingSlider = ({landing}) => {
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider className={styles.landing} {...settings}>
            {landing.map(slide => (
                <LandingSlide key={slide.id} title={slide.title} subtitle={slide.subtitle}/>
            ))}
        </Slider>
    );
}

export default LandingSlider;