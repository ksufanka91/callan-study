import ContactMap from "../content/ContactMap/ContactMap";

const Contacts = ({contactsInfoCard}) => {
    return (
        <div>
            <ContactMap
                mainTitle="Контакты"
                subtitle="Свяжитесь с нами и мы ответим на все ваши вопросы"
                contactsInfoCard={contactsInfoCard}
            />
        </div>
    )

}

export default Contacts;