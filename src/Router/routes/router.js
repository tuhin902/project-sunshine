import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/signin',
                element: <Signin />
            },

        ]
    }
]);

export default router;