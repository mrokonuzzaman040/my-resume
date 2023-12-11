import {
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "../Layout/Home/Homepage";
import Contact from "../Layout/Home/Contact/Contact";
import Home from "../Layout/Home/Home";
import Aboutme from "../Layout/Home/AboutMe/Aboutme";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'contact',
                element: <Contact></Contact>,
            },
            {
                path: 'about',
                element: <Aboutme></Aboutme>,
            },
            {
                path: 'hireme',
                element: <Contact></Contact>,
            }
        ]
    },

]);

export default Router;