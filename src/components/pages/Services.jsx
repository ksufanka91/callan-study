import CardsWithInfo from "../UI/CardsWithInfo/CardsWithInfo";
import services from "../../data/services.json";


const Services = () => {
    return (
        <div className="container">
            <CardsWithInfo
                items={services}
                title={"Услуги"}
                subtitle={"Мы предлагаем нашим клиентам следующие услуги:"}
            />
        </div>
    )
}

export default Services;