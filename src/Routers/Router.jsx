import {
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "../Layout/Home/Homepage";
import Contact from "../Layout/Home/Contact/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
        children: [
            {
                path: 'contact',
                element: <Contact></Contact>,
            },
        ]
    },

]);

export default Router;