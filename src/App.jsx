import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function App() {
    // const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch(import.meta.env.VITE_BASE_URL + `/profile`, {
                    headers: {access_token: localStorage.getItem('access_token')}
                })
                const user = await res.json()
                dispatch({type: 'setUser', payload: user})
            } catch (err) {
                console.log(err)
            }
        }
        if (localStorage.getItem('access_token')) {
            fetchUser()
        }
    }, [dispatch])

    return <RouterProvider router={router} />
}

export default App
