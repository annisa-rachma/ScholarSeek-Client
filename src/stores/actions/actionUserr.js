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
            localStorage.setItem("access_token", data.access_token)
            return (dispatch) => {
                dispatch({ type: "login", payload: data })
            }
        } catch (err) {
            throw { err }
        }
    }

    static logout() {
        localStorage.removeItem("access_token")
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
