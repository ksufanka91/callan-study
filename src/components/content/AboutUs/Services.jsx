import services from "../../../data/services.json";
import CardsWithInfo from "../../UI/CardsWithInfo/CardsWithInfo";

const Services = () => {
    return (
        <>
            <CardsWithInfo
                items={services}
                title={"Услуги"}
                subtitle={"Мы предлагаем нашим клиентам следующие услуги:"}
            />
        </>
    );
};

export default Services;