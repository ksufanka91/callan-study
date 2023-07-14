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
        <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route
                        path="/"
                        element={<Home/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<About/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<Services/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<Universities/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<Students/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<News/>}>
                    </Route>
                    <Route
                        path="/"
                        element={<Contacts/>}>
                    </Route>
                </Route>
            </Routes>
            <ScrollToTop />
        </HashRouter>
    )
}

export default App;
