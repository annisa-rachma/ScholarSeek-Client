import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Scholarships from "../pages/Scholarships"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/scholarships",
                element: <Scholarships />,
            },
        ],
    },
])
