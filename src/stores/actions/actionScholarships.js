export function fetchScholarships() {
    return async function (dispatch) {
        try {
          const res = await fetch( BASE_URL + "/scholarships", {
            // headers: {
            //     access_token: localStorage.access_token,
            // },
          });
          const data = await res.json();
          if (!res.ok) {
            throw data;
          }
          dispatch({
            type : 'fetch/getScholarships',
            payload : data
        });
        } catch (error) {
            throw error;
        }
      }
}