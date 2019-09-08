export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'VALID_USER':
      return action.user;
    default:
      return state
  }
}