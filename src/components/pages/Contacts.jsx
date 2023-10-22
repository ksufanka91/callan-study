import ContactMap from "../content/ContactMap/ContactMap";

const Contacts = ({contactsInfoCard}) => {
    return (
        <ContactMap
            mainTitle="Контакты"
            subtitle="Свяжитесь с нами и мы ответим на все ваши вопросы"
            contactsInfoCard={contactsInfoCard}/>
    )
}

export default Contacts;