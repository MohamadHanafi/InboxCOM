import {
  MESSAGES_USER_REQUEST,
  MESSAGES_USER_SUCCESS,
  MESSAGES_USER_FAILURE,
  MESSAGES_USER_RESET,
  MESSAGE_GET_REQUEST,
  MESSAGE_GET_FAILURE,
  MESSAGE_GET_RESET,
  MESSAGE_GET_SUCCESS,
} from "../constants/messagesConstants";

export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGES_USER_REQUEST:
      return { loading: true };
    case MESSAGES_USER_SUCCESS:
      return { loading: false, success: true, messages: action.payload };
    case MESSAGES_USER_FAILURE:
      return { loading: false, error: action.payload };
    case MESSAGES_USER_RESET:
      return {};
    default:
      return state;
  }
};

export const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_GET_REQUEST:
      return { loading: true };
    case MESSAGE_GET_SUCCESS:
      return { loading: false, success: true, message: action.payload };
    case MESSAGE_GET_FAILURE:
      return { loading: false, error: action.payload };
    case MESSAGE_GET_RESET:
      return {};
    default:
      return state;
  }
};
