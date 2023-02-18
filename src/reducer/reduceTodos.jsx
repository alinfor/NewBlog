

const initialState = [];

export const reduceTodos = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_TODOS":
      return action.todos;
    default:
      return state;
  }
};