import { BASE_URL } from "../../routes/base_url";

export function fetchBookmarkScholarship() {
    return async function (dispatch) {
        try {

          let url = BASE_URL + "/bookmarks/scholarships"

          const res = await fetch( url, {
            headers: {
                access_token: localStorage.access_token,
            },
          });
          const data = await res.json();
          if (!res.ok) {
            throw data;
          }
          dispatch({
            type : 'fetch/getBookmarkScholarships',
            payload : data
        });
        } catch (error) {
            throw error;
        }
      }
}