import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Universities from "./pages/Universities";
import Students from "./pages/Students";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import UniversityDetailPage from "./pages/UniversityDetailPage";

import {
    loadHome,
    loadUniversities,
    loadUniversity,
    loadAbout,
    loadServices,
    loadNews,
    loadStudents
} from "../loaders/loaders";


function App() {
    /**
     * Используем именно HashRouter чтобы навигация работала в GitHub Pages
     */
    const router = createHashRouter(
        createRoutesFromElements(
            <>
                <Route element={<Layout headerAbsolute={true} headerShadow={false}/>}>
                    <Route
                        path="/"
                        element={<Home/>}
                        loader={loadHome}
                        handle={{
                            crumb: () => "Главная",
                        }}>
                    </Route>
                </Route>

                <Route element={<Layout/>}>
                    <Route
                        path="about"
                        element={<About/>}
                        loader={loadAbout}
                        handle={{
                            crumb: () => "О нас",
                        }}>
                    </Route>
                    <Route
                        path="services"
                        element={<Services/>}
                        loader={loadServices}
                        handle={{
                            crumb: () => "Услуги",
                        }}>
                    </Route>
                    <Route
                        path="universities"
                        element={<Universities/>}
                        loader={loadUniversities}
                        handle={{
                            crumb: () => "Университеты",
                        }}>
                    </Route>
                    <Route
                        path="universities/:id"
                        element={<UniversityDetailPage/>}
                        loader={loadUniversity}
                        handle={{
                            crumb: (data) => data.university?.name,
                        }}>
                    </Route>

                    <Route
                        path="students"
                        element={<Students/>}
                        loader={loadStudents}
                        handle={{
                            crumb: () => "Студенты",
                        }}>
                    </Route>
                    <Route
                        path="news"
                        element={<News/>}
                        loader={loadNews}
                        handle={{
                            crumb: () => "Новости",
                        }}>
                    </Route>
                </Route>

                <Route element={<Layout showContactUs={false} showContacts={false}/>}>
                    <Route
                        path="contacts"
                        element={<Contacts/>}>
                    </Route>
                </Route>
            </>
        )
    );

    return (
        <RouterProvider router={router}/>
    )
}

export default App;
