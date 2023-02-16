

const initialState = [];

export const reduceTodos = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_TODOS":
        console.log(action);
      return action.payload;
    default:
      return state;
  }
};