export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SINGLE_TODO = "SINGLE_TODO";

export const addTodoAction = (todo) => {
  //   console.log("This is from Add Todo Action : ", todo);
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const getSingleTodo = (id) => {
  return {
    type: SINGLE_TODO,
    payload: id,
  };
};

export const updateTodoAction = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
