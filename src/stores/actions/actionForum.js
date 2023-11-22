import { BASE_URL } from "../../routes/base_url"


export function fetchForumDetail(slug) {
    return async function (dispatch) {
        try {
            const res = await fetch(`${BASE_URL}/threads/${slug}`, {
                headers: {
                  access_token: localStorage.access_token,
              },
              })
            const data = await res.json()
            if (!res.ok) {
                throw data
            }
            dispatch({
                type: "fetch/getForumDetail",
                payload: data,
            })
        } catch (error) {
            throw error
        }
    }
}

export function handleAddComment(slug, payload) {
    return async function (dispatch) {
      try {
        const res = await fetch(`${BASE_URL}/threads/${slug}/comment`, {
            body: JSON.stringify(payload),
            method: "post",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.access_token,
          },
        });
        const data = await res.json();
        if (!res.ok) throw data;
        dispatch(fetchForumDetail(slug))
        // console.log("berhasil delete")
        return data;
      } catch (error) {
        throw error;
      }
    };
}

// export function handleLikeThread(slug) {
//     return async function (dispatch) {
//       try {
//         const res = await fetch(`${BASE_URL}/threads/${slug}/like`, {
//         method: "put",
//           headers: {
//             "Content-Type": "application/json",
//             access_token: localStorage.access_token,
//           },
//         });
//         const data = await res.json();
//         if (!res.ok) throw data;
//         dispatch(fetchForumDetail(slug))
//         // console.log("berhasil delete")
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     };
// }