import { ADD_TODO } from "../Actions/todoAction";
import { DELETE_TODO } from "../Actions/todoAction";
import { UPDATE_TODO } from "../Actions/todoAction";
import { SINGLE_TODO } from "../Actions/todoAction";

const initialTodos = {
  todos: [],
  singleTodo: {},
};

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let updateTodo = state.todos;
      updateTodo.push(action.payload);
      //   console.log("This is Reducer : ", updateTodo);
      return { ...state, todos: updateTodo };
    }
    case DELETE_TODO: {
      const afterDeleteTodos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
      return { ...state, todos: afterDeleteTodos };
    }
    case SINGLE_TODO: {
      return {
        ...state,
        singleTodo: { ...state.todos[action.payload], id: action.payload },
      };
    }
    case UPDATE_TODO: {
      let updateTodos = [...state.todos];
      updateTodos[action.payload.id] = action.payload;
      return { ...state, todos: updateTodos };
    }
    default:
      return state;
  }
};

export default todosReducer;
