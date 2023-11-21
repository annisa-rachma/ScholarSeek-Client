import { BASE_URL } from "../../routes/base_url";

export function fetchBookmarkScholarship() {
  return async function (dispatch) {
    try {
      let url = BASE_URL + "/bookmarks/scholarships";

      const res = await fetch(url, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw data;
      }
      dispatch({
        type: "fetch/getBookmarkScholarships",
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function handleAddScholarshipBookmark(slug) {
  return async function (dispatch) {
    try {
      const res = await fetch(`${BASE_URL}/scholarships/${slug}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
      const data = await res.json();
      if (!res.ok) throw data;
      // dispatch(fetchProducts())
      // console.log("berhasil delete")
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function fetchBookmarkMentoring() {
  return async function (dispatch) {
    try {
      let url = BASE_URL + "/bookmarks/mentoring";

      const res = await fetch(url, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw data;
      }
      dispatch({
        type: "fetch/getBookmarkMentoring",
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
}

