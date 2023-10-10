import {Outlet} from "react-router-dom"
import Header from "../header/Header"
import Footer from "../Footer/Footer"
import ContactUs from "../../content/ContactUs/ContactUs";
import Contacts from "../../content/Contacts/Contacts";

function Layout({headerAbsolute, headerShadow, showContactUs = true, showContacts = true}) {
    return (
        <>
            <Header absolute={headerAbsolute} shadow={headerShadow}/>

            <Outlet/>

            {showContactUs && <ContactUs/>}
            {showContacts &&  <Contacts/>}
            <Footer/>
        </>
    )
}

export default Layout;