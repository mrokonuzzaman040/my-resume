import {
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "../Layout/Home/Homepage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
    },
]);

export default Router;