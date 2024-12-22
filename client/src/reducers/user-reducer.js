const initialState = {
  isLogin: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
