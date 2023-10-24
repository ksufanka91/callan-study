import classNames from "classnames";
import styles from "./ContactInfo.module.scss";


const ContactInfo = ({address, schedule, className, show = true}) => {
    const locationIcon = <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.00024 0C2.68656 0 0.000244141 2.78183 0.000244141 6.21349C0.000244141 9.64505 4.08922 16 6.00024 16C7.91127 16 12.0002 9.64505 12.0002 6.21349C12.0002 2.78183 9.31397 0 6.00024 0ZM6.00024 9.06138C4.25588 9.06138 2.8418 7.597 2.8418 5.79053C2.8418 3.98416 4.25588 2.51972 6.00024 2.51972C7.74461 2.51972 9.15869 3.98416 9.15869 5.79053C9.15869 7.597 7.74461 9.06138 6.00024 9.06138Z"
            fill="#52BFFF"/>
    </svg>

    const clockIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.00024 0C12.4116 0 16.0002 3.58866 16.0002 8C16.0002 12.4113 12.4116 16 8.00024 16C3.5889 16 0.000244141 12.4113 0.000244141 8C0.000244141 3.58866 3.5889 0 8.00024 0ZM7.33359 8C7.33359 8.36866 7.63159 8.66666 8.00024 8.66666H10.6669C11.0356 8.66666 11.3336 8.36866 11.3336 8C11.3336 7.63134 11.0356 7.33334 10.6669 7.33334H8.6669V3.33334C8.6669 2.96469 8.3689 2.66669 8.00024 2.66669C7.63159 2.66669 7.33359 2.96469 7.33359 3.33334V8Z"
            fill="#52BFFF"/>
    </svg>

    return (
        <div className={classNames(styles.info, className)}>
            <div className={styles.infoBox}>
                {locationIcon}
                <span><b>{address}</b></span>
            </div>

            <div className={styles.infoBox}>
                {clockIcon}
                <span><b>{schedule}</b></span>
            </div>
        </div>
    );
};

export default ContactInfo;