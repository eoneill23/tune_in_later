export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case "INVALID_USER":
      return "Please login to save an album.";
    default:
      return state;
  }
};
