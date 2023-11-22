import showToast from "../../utlis/showToast"

export default class UserAction {
    static async login(formObj) {
        try {
            const res = await fetch(import.meta.env.VITE_BASE_URL + "/login", {
                method: "post",
                body: JSON.stringify(formObj),
                headers: { "Content-Type": "application/json" },
            })
            const data = await res.json()
            if (!res.ok) {
                throw data
            }
            // sets access_token to locale storage
            localStorage.setItem("access_token", data.access_token)
            showToast("success", `Welcome ${data.user.username}!`)
            // sets user store state to be populated with user information
            return (dispatch) => {
                dispatch({ type: "login", payload: data.user })
            }
        } catch (err) {
            throw { message: err.message }
        }
    }

    static logout() {
        localStorage.removeItem("access_token")
        showToast("success", `Logout successful!`)
        return { type: "logout" }
    }

    // static async getUserDetail(slug) {
    //     try {
    //         const res = await fetch(
    //             import.meta.env.VITE_BASE_URL + `/profile/${slug}`,
    //             {
    //                 method: "get",
    //                 headers: {
    //                     access_token: localStorage.getItem("access_token"),
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         )
    //         const data = await res.json()
    //         if (!res.ok) {
    //             throw data
    //         }
    //     } catch (err) {}
    // }
}
// export function handleLoginn(payload) {
//     return async function (dispatch) {
//       try {
//         const res = await fetch(BASE_URL + "/login", {
//           method: "post",
//           body: JSON.stringify(payload),
//           headers: {"Content-Type": "application/json"},
//         });
//         const data = await res.json();
//         if (!res.ok) {
//           throw data;
//         }

//         // console.log(data)
//         // localStorage.setItem('data', JSON.stringify(data));
//         localStorage.setItem("access_token", data.access_token);
//         localStorage.setItem("name", data.name);
//         localStorage.setItem("role", data.role);
//         localStorage.setItem("profileImg", data.profileImg);
//         localStorage.setItem("slug", data.slug)
//         localStorage.setItem("id", data.id)
//       } catch (error) {
//         throw error;
//       }
//     };
//   }
