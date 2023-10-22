import LandingScreen from "../content/LandingScreen/LandingScreen";
import Advantages from "../content/Advantages/Advantages";
import Universities from "../content/Universities/Universities";
import Feedback from "../content/Feedback/Feedback";
import Students from "../content/Students/Students";
import Faq from "../content/Faq/Faq";
import ComponentsContainer from "../ComponentsContainer";

import {useLoaderData} from "react-router-dom";

const Home = () => {
    const {landing, universities, feedback, students, faq, advantages} = useLoaderData();

    return (
        <>
            <LandingScreen landing={landing}/>

            <ComponentsContainer>
                <Advantages
                    advantages={advantages}
                    subtitle={<><b>Добро пожаловать</b> в нашу группу иностранного образования</>}
                    title={"Почему мы?"}/>
                <Universities universities={universities}/>
                <Feedback feedback={feedback}/>
                <Students students={students}/>
            </ComponentsContainer>

            <Faq faq={faq}/>
        </>
    )
}

export default Home;