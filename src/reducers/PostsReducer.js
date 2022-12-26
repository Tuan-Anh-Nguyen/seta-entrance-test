import { FETCH_API_POSTS_ERROR, FETCH_API_POSTS_PENDING, FETCH_API_POSTS_SUCCESS } from "../constants/PostsActionTypes";

const initialState = {
     posts: [],
     pending: false,
     error: null
}

export default function PostsReducers(state = initialState, action) {
     switch (action.type) {
          case FETCH_API_POSTS_PENDING:
               return {
                    ...state,
                    pending: true
               }
          case FETCH_API_POSTS_SUCCESS:
               return {
                    ...state,
                    posts: action.data,
                    pending: false
               }
          case FETCH_API_POSTS_ERROR:
               return {
                    ...state,
                    error: action.error,
                    pending: false
               }
          default:
               return state;
     }
}