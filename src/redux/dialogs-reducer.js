const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const inititalState = {
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
}

export const dialogsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body }],
        newMessageBody: ''
      };
    default:
      return state
  }
}

export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer