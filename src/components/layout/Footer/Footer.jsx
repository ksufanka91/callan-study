import styles from "./Footer.module.scss";
import className from "classnames";
import Nav from "../header/Nav";
import Socials from "../../UI/Socials";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.columns}>
                    <div className={className(styles.column, styles.columnWithLogos)}>
                        <img src="images/footer/footer-logo-1.png" alt="footer-logo" className={styles.image} width="126" height="56"/>
                        <img src="images/footer/footer-logo-2.png" alt="footer-logo" className={styles.image} width="126" height="45"/>
                    </div>
                    <div className={className(styles.column, styles.columnRight)}>
                        <div className={styles.row}>
                            <div className={className(styles.box, styles.boxNav)}>
                                <Nav classNames={styles.navigation}/>
                                <Socials size={'big'}/>
                            </div>

                        </div>
                        <div className={styles.row}>
                            <div className={className(styles.box, styles.boxContacts)}>
                                <div className={styles.item}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                        <path
                                            d="M0.437568 6.76841C0.154317 6.00333 -0.0507961 5.22197 0.0110633 4.39178C0.0501324 3.88064 0.242222 3.44438 0.616634 3.08626C1.0236 2.7021 1.40778 2.29839 1.80824 1.90772C2.32916 1.39332 2.98357 1.39658 3.50449 1.90772C3.82681 2.22351 4.14588 2.54582 4.46494 2.86813C4.77424 3.17742 5.08679 3.48671 5.39609 3.79925C5.9398 4.34946 5.94306 4.99082 5.39934 5.53777C5.00865 5.92845 4.62122 6.32238 4.22402 6.70655C4.11983 6.80747 4.11006 6.89212 4.16541 7.01909C4.42587 7.64418 4.80354 8.20089 5.22679 8.7218C6.0798 9.77012 7.0435 10.7012 8.19279 11.4207C8.44022 11.5738 8.71045 11.6877 8.96766 11.8277C9.10114 11.8993 9.18905 11.8765 9.29649 11.7658C9.68392 11.3654 10.0811 10.9715 10.4783 10.5775C10.9993 10.0631 11.6504 10.0599 12.1713 10.5775C12.8095 11.2091 13.4443 11.844 14.0759 12.4821C14.6066 13.016 14.6034 13.6704 14.0694 14.2076C13.708 14.5722 13.3271 14.9173 12.9885 15.2982C12.4936 15.8517 11.8685 16.034 11.1588 15.9949C10.1235 15.9396 9.16951 15.5945 8.24813 15.1485C6.20352 14.1555 4.45843 12.7783 2.99659 11.0398C1.91568 9.75059 1.0236 8.35065 0.437568 6.76841ZM15.2741 7.93393C15.693 7.93393 16.0364 7.59325 15.9969 7.17617C15.6376 3.38764 12.6123 0.362429 8.82359 0.00310807C8.40651 -0.036449 8.06581 0.306969 8.06581 0.725914C8.06581 1.14486 8.40697 1.47979 8.82306 1.52871C11.7747 1.87572 14.1242 4.22519 14.4712 7.1767C14.5202 7.59278 14.8551 7.93393 15.2741 7.93393ZM11.5918 7.18073C11.6783 7.59065 12.0096 7.93393 12.4285 7.93393C12.8475 7.93393 13.193 7.59232 13.1314 7.17793C12.8013 4.95888 11.041 3.19861 8.82183 2.86852C8.40743 2.80688 8.06581 3.15241 8.06581 3.57136C8.06581 3.9903 8.4091 4.32156 8.81903 4.40806C9.49498 4.55067 10.1156 4.88526 10.6151 5.38475C11.1146 5.88425 11.4492 6.50481 11.5918 7.18073Z"
                                            fill="#52BFFF"/>
                                    </svg>
                                    <span className={styles.element}>+998 (99) 878-63-99</span>
                                </div>

                                <div className={styles.item}>
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                        <path
                                            d="M7 0C3.13404 0 0 3.12956 0 6.99017C0 10.8507 4.77047 18 7 18C9.22953 18 14 10.8507 14 6.99017C14 3.12956 10.866 0 7 0ZM7 10.1941C4.9649 10.1941 3.31514 8.54662 3.31514 6.51434C3.31514 4.48217 4.9649 2.83469 7 2.83469C9.0351 2.83469 10.6849 4.48217 10.6849 6.51434C10.6849 8.54662 9.0351 10.1941 7 10.1941Z"
                                            fill="#52BFFF"/>
                                    </svg>
                                    <span className={styles.element}>г. Город, ул. Улица, 24 (Офис 24)</span>
                                </div>

                                <div className={styles.item}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                        <path
                                            d="M8 0C12.4113 0 16 3.58866 16 8C16 12.4113 12.4113 16 8 16C3.58866 16 0 12.4113 0 8C0 3.58866 3.58866 0 8 0ZM7.33334 8C7.33334 8.36866 7.63134 8.66666 8 8.66666H10.6667C11.0353 8.66666 11.3333 8.36866 11.3333 8C11.3333 7.63134 11.0353 7.33334 10.6667 7.33334H8.66666V3.33334C8.66666 2.96469 8.36866 2.66669 8 2.66669C7.63134 2.66669 7.33334 2.96469 7.33334 3.33334V8Z"
                                            fill="#52BFFF"/>
                                    </svg>
                                    <span className={styles.element}>Пн-Пт 9:00 - 18:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;