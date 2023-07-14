import classNames from "classnames";
import styles from "./Arrow.module.scss";

function Arrow({className, onClick, direction = 'prev'}) {

    const disabled = className?.includes("slick-disabled");

    return (
        <button
            type="button"
            className={classNames(className, styles.arrow, {
                [styles.arrowPrev]: direction === 'prev',
                [styles.arrowNext]: direction === 'next',
                [styles.arrowDisabled]: disabled,
            })}
            onClick={onClick}
        >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L7 7L2 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        </button>
    );
}

export default Arrow;