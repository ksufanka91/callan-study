import styles from "./Nav.module.scss"
import className from "classnames";
import {Link} from "react-router-dom";

const Nav = ({classNames}) => {
    return (
        <nav className={className(styles.nav, classNames)}>
            <Link to="/" className={styles.navItem}>
                Главная
            </Link>
            <Link to="/about" className={styles.navItem}>
                О нас
            </Link>
            <Link to="/services" className={styles.navItem}>
                Услуги
            </Link>
            <Link to="/universities" className={styles.navItem}>
                Университеты
            </Link>
            <Link to="/students" className={styles.navItem}>
                Студенты
            </Link>
            <Link to="/news" className={styles.navItem}>
                Новости
            </Link>
            <Link to="/contacts" className={styles.navItem}>
                Контакты
            </Link>
        </nav>
    )
}

export default Nav;