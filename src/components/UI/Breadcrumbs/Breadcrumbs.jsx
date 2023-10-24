import {Link} from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({crumbs}) => {
    if (!crumbs || crumbs.length === 0) {
        return null;
    }

    return (
        <div className="container">
            <div className={styles.breadcrumbs}>
                <img src="images/icons/home.svg" alt="home" className={styles.icon}/>
                {crumbs.map((crumb, index) =>
                    <Link
                        to={crumb.link}
                        key={index}
                        className={styles.breadcrumb}>
                        {crumb.title}
                    </Link>)}
            </div>
        </div>
    );
}

export default Breadcrumbs;