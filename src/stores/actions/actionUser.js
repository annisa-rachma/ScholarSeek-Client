import { BASE_URL } from "../../routes/base_url";

export function handleLogin(payload) {
    return async function (dispatch) {
      try {
        const res = await fetch(BASE_URL + "/login", {
          method: "post",
          body: JSON.stringify(payload),
          headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }

        // console.log(data)
        // localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("name", data.name);
        localStorage.setItem("role", data.role);
        localStorage.setItem("profileImg", data.profileImg);
        localStorage.setItem("slug", data.slug)
        localStorage.setItem("id", data.id)
      } catch (error) {
        throw error;
      }
    };
  }

  export function fetchUserDetail(slug) {
    return async function(dispatch) {
        try {
            const res = await fetch(`${BASE_URL}/profile/${slug}`, {
              headers: {
                access_token: localStorage.access_token,
            },
            });
            const data = await res.json();
            if (!res.ok) {
              throw data;
            }
            dispatch({
                type : 'fetch/getProfileDetail',
                payload : data
            })
          } catch (error) {
            throw error;
          }
    }
  }