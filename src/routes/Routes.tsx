import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Home} from "../pages/Home";
import {Contact} from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home/>},
            {path: "Contact", element: <Contact/>},
        ]
    }
])