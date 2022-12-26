import { FETCH_API_POSTS_ERROR, FETCH_API_POSTS_PENDING, FETCH_API_POSTS_SUCCESS } from "../constants/PostsActionTypes"

export const fetchAPIPosts = () => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }
     await dispatch({
          type: FETCH_API_POSTS_PENDING
     });
     try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
          const data = await response.json();
          return dispatch({
               type: FETCH_API_POSTS_SUCCESS,
               data: data
          })
     }
     catch (err) {
          return dispatch({
               type: FETCH_API_POSTS_ERROR,
               error: err
          })
     }
}