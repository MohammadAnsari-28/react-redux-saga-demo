const initialState = {
  bgColor: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "red":
      return {
        ...state,
        bgColor: "red",
      };
    case "green":
      return {
        ...state,
        bgColor: "green",
      };
    case "blue":
      return {
        ...state,
        bgColor: "blue",
      };
    case "yellow":
      return {
        ...state,
        bgColor: "yellow",
      };
    case "setLis":
      return {
        data: [...action.data],
      };
    default:
      return state;
  }
};

export default reducer;
