import classNames from "classnames";
import UniversityCard from "./UniversityCard/UniversityCard";
import UniversityAccordion from "../UniversitiesPage/UniversityAccordion/UniversityAccordion";
import UniversityDetailSlider from "./UniversityDetailSlider/UniversityDetailSlider";
import styles from "./UniversityDetail.module.scss";


const UniversityDetail = ({university}) => {
    return (
            <div className="container">
                <h1 className="visuallyHidden">{university.name}</h1>
                <h2 className={styles.mainTitle}>{university.name}</h2>

                <div className={styles.mainContentBox}>
                    <div className={styles.mainContent}>
                        <img src={university.imageDetail} alt="university" className={styles.mainImage}/>
                        <UniversityCard university={university} className={styles.show}/>

                        <div className={styles.aboutUniversity}>
                            <h3>
                                О ВУЗе
                            </h3>
                            <div className={styles.paragraph} dangerouslySetInnerHTML={{__html: university.description}}/>
                        </div>


                        <div className={classNames(styles.documents, styles.show)}>
                            <h3 className={styles.documentsTitle}>
                                Документы для поступления
                            </h3>

                            {university.documents.length > 0 && (
                                <ul className={styles.asideList}>
                                    {university.documents.map((document, index) => (
                                        <li className={styles.asideListItem} key={index}>{document}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <aside className={classNames(styles.aside, styles.desktopHidden)}>
                        <UniversityCard university={university}/>

                        <div className={styles.documents}>
                            <h3 className={styles.documentsTitle}>
                                Документы для поступления
                            </h3>

                            {university.documents.length > 0 && (
                                <ul className={styles.asideList}>
                                    {university.documents.map((document, index) => (
                                        <li className={styles.asideListItem} key={index}>{document}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </aside>
                </div>

                <UniversityAccordion university={university} title="Академические программы"/>

                <div className={styles.gallery}>
                    <h3 className={styles.galleryTitle}>Галерея</h3>
                    <UniversityDetailSlider universities={university}/>
                </div>

            </div>
    );
};

export default UniversityDetail;