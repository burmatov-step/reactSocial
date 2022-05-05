const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const inititalState = {
  posts: [
    { id: 1, message: 'hi men', likesCount: 12 },
    { id: 2, message: 'itsmy first post', likesCount: 12 },
    { id: 3, message: 'yo man', likesCount: 12 },
  ],
  newPostText: 'HaHa',
}

const profileReducer = (state = inititalState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText
      return{
        ...state,
        newPostText: '',
        posts: [...state.posts,{id: 5, message: text, likesCount: 0 } ]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer