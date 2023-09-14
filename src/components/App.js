import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import ScrollToTop from "./UI/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Universities from "./pages/Universities";
import Students from "./pages/Students";
import News from "./pages/News";
import Contacts from "./pages/Contacts";


function App() {
    return (
        /**
         * Используем именно HashRouter чтобы навигация работала в GitHub Pages
         */
        <HashRouter>
            <Routes>
                <Route element={<Layout headerAbsolute={true} headerShadow={false}/>}>
                    <Route
                        path="/"
                        element={<Home/>}>
                    </Route>
                </Route>

                <Route element={<Layout/>}>
                    <Route
                        path="about"
                        element={<About/>}
                    >
                    </Route>
                    <Route
                        path="services"
                        element={<Services/>}>
                    </Route>
                    <Route
                        path="universities"
                        element={<Universities/>}>
                    </Route>
                    <Route
                        path="students"
                        element={<Students/>}>
                    </Route>
                    <Route
                        path="news"
                        element={<News/>}>
                    </Route>
                </Route>

                <Route element={<Layout showContactUs={false} showContacts={false}/>}>
                    <Route
                        path="contacts"
                        element={<Contacts/>}>
                    </Route>
                </Route>
            </Routes>
            <ScrollToTop/>
        </HashRouter>
    )
}

export default App;
