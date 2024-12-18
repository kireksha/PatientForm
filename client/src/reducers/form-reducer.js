const initialState = {
  textName: "",
  textPhone: "",
  textComplaint: "",
  textEmail: "",
  textPassword: "",
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TEXT_NAME":
      return {
        ...state,
        textName: payload,
      };
    case "SET_TEXT_PHONE":
      return {
        ...state,
        textPhone: payload,
      };
    case "SET_TEXT_COMPLAINT":
      return {
        ...state,
        textComplaint: payload,
      };
    case "SET_TEXT_EMAIL":
      return {
        ...state,
        textEmail: payload,
      };
    case "SET_TEXT_PASSWORD":
      return {
        ...state,
        textPassword: payload,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};
