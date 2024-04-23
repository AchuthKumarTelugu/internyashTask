import { useEffect } from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import ProductInfor from "./pages/ProductInfor";
import ContactUs from "./pages/Contactus.jsx";
import Aboutus from "./pages/aboutus.jsx";
import OrderPage from './pages/OrderPage'
import Product_details from "./Product_details.jsx";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return ( <
        Routes > { /* <Route path="/navbar" element={<Navbar/>}/> */ } { /* <Route path="/footer" element={<Footer/>}/> */ } <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/aboutus"
        element = { < Aboutus / > }
        /> <
        Route path = "/products"
        element = { < Products / > }
        /> <
        Route path = "/productinfor"
        element = { < ProductInfor / > }
        /> <
        Route path = "/contactus"
        element = { < ContactUs / > }
        /> <
        Route path = "/orderpage"
        element = { < OrderPage / > }
        /> 
        /> <
        Route path = "/productdetails"
        element = { < Product_details / > }
        /> 
        < /
        Routes >
    );
}
export default App;