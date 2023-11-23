import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/home/Home"
import AboutPage from "../pages/AboutPage"
import ScholarshipsPage from "../pages/scholarship/main/ScholarshipsPage"
import ScholarshipDetailPage from "../pages/scholarship/detail/ScholarshipDetailPage"
import MentoringPage from "../pages/mentoring/main/MentoringPage"
import MentoringDetaiLPage from "../pages/mentoring/detail/MentoringDetaiLPage"
import ForumPage from "../pages/forum/main/ForumPage"
import ForumDetailPage from "../pages/forum/detail/ForumDetailPage"
import LoginPage from "../pages/Login"
import MentoringRoomPage from "../pages/mentoring/room/MentoringRoomPage"
import TEST_MentoringRoom from "../pages/mentoring/room/TEST_MentoringRoom"
import TEST_ChannelForm from "../pages/mentoring/room/TEST_ChannelForm"
import ProfilePage from "../pages/profile/ProfilePage"
import BookmarkScholarship from "../pages/profile/BookmarkScholarship"
import BookmarkForum from "../pages/profile/BookmarkForum"
import BookmarkMentoring from "../pages/profile/BookmarkMentoring"
import RegisterPage from "../pages/register/Register"
import SignupMentee from "../pages/register/registerMentee/SignupMentee"
import SignupAwardee from "../pages/register/registerAwardee/SignupAwardee"
import ProfileLayout from "../layouts/ProfileLayout"

export const router = createBrowserRouter([
    {
        path: "/log-in",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/register/mentee",
        element: <SignupMentee />,
    },
    {
        path: "/register/awardee",
        element: <SignupAwardee />,
    },
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
                path: '/join-room',
                element: <TEST_ChannelForm/>
            },
            {
                path: '/mentoring/room/test',
                // element: <MentoringPage/>
                element: <TEST_MentoringRoom/>
            },
            {
                path: '/mentoring/room/:slug',
                element: <MentoringRoomPage/>
            },
            {
                path: '/mentoring/:slug',
                element: <MentoringDetaiLPage/>
            },
            {
                path: '/forum',
                element: <ForumPage/>
            },
            {
                path: '/forum/:slug',
                element: <ForumDetailPage/>
            },
            {
                path: '/profile',
                element: <ProfileLayout/>,
                children: [
                    {
                        path: ':slug',
                        element: <ProfilePage/>
                    },
                    {
                        path : ':slug/bookmarks/scholarships',
                        element : <BookmarkScholarship/>
                    },
                    {
                        path : ':slug/bookmarks/forum',
                        element : <BookmarkForum/>
                    },
                    {
                        path : ':slug/bookmarks/mentoring',
                        element : <BookmarkMentoring/>
                    }
                ]
            },
        ],
    },
])
