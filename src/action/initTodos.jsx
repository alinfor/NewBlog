export const initTodos = () => {
    return async dispatch => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const responseData = await response.json();
 
      dispatch({ type: "INIT_TODOS", payload: responseData });
    };
  };