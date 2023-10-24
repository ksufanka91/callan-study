import {useLoaderData} from "react-router-dom";
import CardsWithInfo from "../UI/CardsWithInfo/CardsWithInfo";

const Services = () => {
    const {services} = useLoaderData();

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