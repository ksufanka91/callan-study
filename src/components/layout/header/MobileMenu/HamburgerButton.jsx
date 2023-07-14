import styles from "../Header.module.scss";


const HamburgerButton = ({isMenuOpen, toggleMenuMode}) => {
    return (
        <button className={styles.burgerMenu}
                onClick={toggleMenuMode}>
            <img src={isMenuOpen ? "images/controls/close-menu-icon.png" : "images/controls/burger-menu.png"}
                 alt="burger-menu"
                 width={42}
                 height={42}
            />
        </button>
    );
};

export default HamburgerButton;