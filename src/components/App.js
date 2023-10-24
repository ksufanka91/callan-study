import {createHashRouter, RouterProvider,} from "react-router-dom";

import Layout from "./layout/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Universities from "./pages/Universities";
import Students from "./pages/Students";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import UniversityDetailPage from "./pages/UniversityDetailPage";
import UniversitiesPage from "./content/UniversitiesPage/UniversitiesPage";
import {
    loadAbout,
    loadHome,
    loadNews,
    loadServices,
    loadStudents,
    loadUniversities,
    loadUniversity
} from "../loaders/loaders";

function App() {
    /**
     * Используем именно HashRouter чтобы навигация работала в GitHub Pages
     */
    const router = createHashRouter([
        {
            element: <Layout headerAbsolute={true} headerShadow={false}/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                    loader: loadHome,
                }
            ]
        },
        {
            element: <Layout/>,
            handle: {
                crumb: () => "Главная",
            },
            children: [
                {
                    path: "about",
                    element: <About/>,
                    loader: loadAbout,
                    handle: {
                        crumb: () => "О нас",
                    }
                },
                {
                    path: "services",
                    element: <Services/>,
                    loader: loadServices,
                    handle: {
                        crumb: () => "Услуги",
                    }
                },
                {
                    path: "universities",
                    Component: Universities,
                    handle: {
                        crumb: () => "Университеты",
                    },
                    children: [
                        {
                            index: true,
                            Component: UniversitiesPage,
                            loader: loadUniversities,
                        },
                        {
                            path: ":id",
                            Component: UniversityDetailPage,
                            loader: loadUniversity,
                            handle: {
                                crumb: (data) => data.university?.name,
                            },
                        }
                    ]
                },
                {
                    path: "students",
                    element: <Students/>,
                    loader: loadStudents,
                    handle: {
                        crumb: () => "Студенты",
                    }
                },
                {
                    path: "news",
                    element: <News/>,
                    loader: loadNews,
                    handle: {
                        crumb: () => "Новости"
                    }
                },
                {
                    path: "contacts",
                    element: <Contacts/>,
                    handle: {
                        crumb: () => "Контакты",
                    }
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App;