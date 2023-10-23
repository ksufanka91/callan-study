import {Outlet, useMatches} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../../content/ContactUs/ContactUs";
import Contacts from "../../content/Contacts/Contacts";
import ScrollToTop from "../../UI/ScrollToTop";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";

function Layout({headerAbsolute, headerShadow, showContactUs = true, showContacts = true}) {
    const matches = useMatches();

    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter(match => Boolean(match.handle?.crumb))

        // now map them into an array of elements, passing the loader data to each one
        .map(match => ({
            title: match.handle.crumb(match.data),
            link: match.pathname,
        }));

    return (
        <>
            <Header absolute={headerAbsolute} shadow={headerShadow}/>

            <Breadcrumbs crumbs={crumbs}/>

            <Outlet/>

            {showContactUs && <ContactUs/>}
            {showContacts && <Contacts/>}
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default Layout;