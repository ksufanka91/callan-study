import {useRef, useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import Filters from "../Filters/Filters";
import SearchAndSort from "./SearchAndSort/SearchAndSort";
import UniversitiesList from "./UniversitiesList/UniversitiesList";
import Button from "../../UI/Button/Button";

import styles from "./UniversitiesPage.module.scss";


const UniversitiesPage = ({universities, filters}) => {
    const refFilter = useRef();

    const arrowIcon =
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.9653 8.86969C13.9133 8.74508 13.792 8.66376 13.6574 8.66376H10.006V0.333232C10.006 0.149294 9.85667 0 9.67273 0H4.34117C4.15723 0 4.00794 0.149294 4.00794 0.333232V8.66379H0.342507C0.207895 8.66379 0.0865923 8.74511 0.0346097 8.86907C-0.0167169 8.99368 0.0112736 9.13698 0.106586 9.23229L6.75436 15.9021C6.817 15.9647 6.90166 16 6.99029 16C7.07891 16 7.16357 15.9647 7.22621 15.9027L13.8933 9.23295C13.9886 9.1376 14.0173 8.99434 13.9653 8.86969Z"
                fill="white"/>
        </svg>;

    const filterIcon =
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="19" transform="matrix(-1 0 0 1 38 0)" fill="url(#paint0_linear_89_2034)"/>
            <path
                d="M28.2569 9H9.82031C9.38879 9 9.03906 9.34973 9.03906 9.78125C9.03906 11.9568 9.97168 14.0339 11.5978 15.4793L15.0193 18.5204C15.6126 19.0478 15.9528 19.8055 15.9528 20.5994V28.2178C15.9528 28.8404 16.6486 29.2136 17.1673 28.8677L21.7765 25.795C21.9938 25.6501 22.1244 25.4063 22.1244 25.145V20.5994C22.1244 19.8055 22.4647 19.0478 23.0579 18.5204L26.4793 15.4793C28.1054 14.0339 29.038 11.9568 29.038 9.78125C29.038 9.34973 28.6883 9 28.2569 9ZM25.4412 14.3114L22.0199 17.3527C21.0934 18.1763 20.5619 19.3597 20.5619 20.5993V24.7269L17.5152 26.758V20.5994C17.5152 19.3597 16.9837 18.1763 16.0572 17.3527L12.6359 14.3116C11.5394 13.3367 10.8394 12.0009 10.6521 10.5623H27.425C27.2376 12.0009 26.5378 13.3367 25.4412 14.3114Z"
                fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_89_2034" x1="38" y1="42.5" x2="6.5" y2="2"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.082217" stopColor="#B1E2FF"/>
                    <stop offset="1" stopColor="#68C7FF"/>
                </linearGradient>
            </defs>
        </svg>

    const [universitiesArray, setUniversitiesArray] = useState(universities);
    const [showFilters, setShowFilters] = useState(false);

    const handleFilters = () => {
        setShowFilters(true);
        disableBodyScroll(refFilter.current);
    }

    return (
        <div className={styles.universitiesPage}>
            <div className="container">
                <h1 className="visuallyHidden">Университеты</h1>
                <h2 className={styles.mainTitle}>Университеты</h2>

                <div className={styles.mainContentBox}>
                    <aside className={styles.aside}>
                        <Filters ref={refFilter} filters={filters} open={showFilters} hideFilter={() => {
                            setShowFilters(false);
                            enableBodyScroll(refFilter.current);
                        }}/>
                    </aside>

                    <div className={styles.mainContent}>
                        <Button icon={filterIcon} className={styles.buttonFilter} onClick={handleFilters}>
                            Фильтры
                        </Button>
                        <SearchAndSort/>
                        <UniversitiesList items={universitiesArray}/>
                        <div className={styles.buttonBox}>
                            <Button icon={arrowIcon} className={styles.button} onClick={() => {
                                // в будущем здесь будет запрос к бекенду, пока просто эмуляция работы пагинации
                                setUniversitiesArray([...universitiesArray, ...universities]);
                            }}>Еще</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversitiesPage;