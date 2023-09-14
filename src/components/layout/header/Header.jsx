import {useState} from "react";
import Socials from "../../UI/Socials";
import Nav from "./Nav";
import Button from "../../UI/Button/Button";
import MobileMenu from "./MobileMenu/MobileMenu";
import HamburgerButton from "./MobileMenu/HamburgerButton";

import styles from "./Header.module.scss";
import className from "classnames";

const Header = ({absolute = false, shadow = true}) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    const icon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 0C3.14217 0 0 3.12649 0 6.99959C0 8.19735 0.31106 9.36395 0.902171 10.4061L0.0466149 12.9726C-0.0467184 13.2526 0.0310597 13.5637 0.233282 13.7659C0.464178 13.9736 0.75123 14.0625 1.02662 13.9526L3.59333 13.097C4.6355 13.6881 5.80222 13.9992 7 13.9992C10.8733 13.9992 14 10.8571 14 6.99965C14 3.12649 10.8733 0 7 0V0ZM3.88889 7.77733C3.46884 7.77733 3.11111 7.41962 3.11111 6.99959C3.11111 6.56412 3.46884 6.22186 3.88889 6.22186C4.32439 6.22186 4.66667 6.56412 4.66667 6.99959C4.66667 7.41962 4.32439 7.77733 3.88889 7.77733ZM7 7.77733C6.57995 7.77733 6.22222 7.41962 6.22222 6.99959C6.22222 6.56412 6.57995 6.22186 7 6.22186C7.4355 6.22186 7.77778 6.56412 7.77778 6.99959C7.77778 7.41962 7.4355 7.77733 7 7.77733ZM10.1111 7.77733C9.69106 7.77733 9.33333 7.41962 9.33333 6.99959C9.33333 6.56412 9.69106 6.22186 10.1111 6.22186C10.5466 6.22186 10.8889 6.56412 10.8889 6.99959C10.8889 7.41962 10.5466 7.77733 10.1111 7.77733Z"
            fill="white"/>
    </svg>

    return (
        <header className={className(
            styles.header,
            {
                [styles.headerMenuOpen]: isMenuOpen,
                [styles.headerAbsolute]: absolute,
                [styles.headerShadow]: shadow,
            }
        )}>
            <div className={styles.headerContainer}>
                <div className="container">
                    <div className={styles.headerBox}>
                        <img src="images/logos/logo.svg" alt="main site logo" className={styles.image}/>
                        <Socials/>
                        <Nav classNames={styles.navigation}/>
                        <Button icon={icon} color={'secondary'} className={styles.button}>
                            Оставить заявку
                        </Button>
                        <div className={styles.burgerBox}>
                            <HamburgerButton isMenuOpen={isMenuOpen} toggleMenuMode={toggleMenuMode}/>
                        </div>

                    </div>
                </div>
            </div>

            <MobileMenu open={isMenuOpen}/>
        </header>
    )
}

export default Header;