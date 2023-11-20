import { BASE_URL } from "../../routes/base_url";

export function fetchMentoring(params = {}) {
    return async function (dispatch) {
        try {
          const queryString = Object.keys(params)
                .map((key) => `${key}=${params[key]}`)
                .join('&');
          //params isinya bisa 
          // degree=s2&degree=s3&funding=full&country= -> filter
          //name -> search
          let url = BASE_URL + "/mentoring"

          if(params) {
            url += queryString
          }

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
            type : 'fetch/getMentoring',
            payload : {...data, prevOffSet: params.pageParam }
        });
        } catch (error) {
            throw error;
        }
      }
}

export function fetchMentoringDetail(slug) {
  return async function(dispatch) {
      try {
          const res = await fetch(`${BASE_URL}/mentoring/${slug}`, {
            headers: {
              access_token: localStorage.access_token,
          },
          });
          const data = await res.json();
          if (!res.ok) {
            throw data;
          }
          dispatch({
              type : 'fetch/getMentoringDetail',
              payload : data
          })
        } catch (error) {
          throw error;
        }
  }
}