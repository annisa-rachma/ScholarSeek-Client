import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/home/Home"
import AboutPage from "../pages/AboutPage"
import ScholarshipsPage from "../pages/scholarship/main/ScholarshipsPage"
import ScholarshipDetailPage from "../pages/scholarship/detail/ScholarshipDetailPage"
import MentoringPage from "../pages/mentoring/main/MentoringPage"
import MentoringDetaiLPage from "../pages/mentoring/detail/MentoringDetaiLPage"

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
                element: <AboutPage />,
            },
            {
                path: "/scholarships",
                element: <ScholarshipsPage />,
            },
            {
                path: '/scholarships/:slug',
                element: <ScholarshipDetailPage/>
            },
            {
                path: '/mentoring',
                element: <MentoringPage/>
            },
            {
                path: '/mentoring/:slug',
                element: <MentoringDetaiLPage/>
            }
        ],
    },
])
