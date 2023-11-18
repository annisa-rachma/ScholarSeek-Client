import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/home/Home"
import About from "../pages/About"
import Scholarships from "../pages/scholarship/main/Scholarships"
import ScholarshipDetail from "../pages/scholarship/detail/ScholarshipDetail"

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
            {
                path: '/scholarships/:slug',
                element: <ScholarshipDetail/>
            }
        ],
    },
])
