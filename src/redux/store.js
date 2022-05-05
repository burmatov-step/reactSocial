import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi men', likesCount: 12 },
        { id: 2, message: 'itsmy first post', likesCount: 12 },
        { id: 3, message: 'yo man', likesCount: 12 },
      ],
      newPostText: 'HaHa',
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: 'Stepan' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Lera' },
        { id: 4, name: 'Andrey' },
        { id: 5, name: 'Guidak' },
      ],
      messages: [
        { id: 1, message: 'Stepan' },
        { id: 2, message: 'Vasya' },
        { id: 3, message: 'Lera' },
        { id: 4, message: 'Andrey' },
        { id: 5, message: 'Guidak' },
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state change')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage =  profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage,action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
}

export default store
window.store = store