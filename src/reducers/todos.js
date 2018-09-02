const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title,
        text: action.text,
      };
    case 'UPDATE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        id: action.id,
        title: action.title,
        text: action.text,
      };
    case 'DELETE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        id: action.id,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'UPDATE_TODO':
      return state.map(t => todo(t, action));
    case 'DELETE_TODO':
      state = state.filter(state => state.id !== action.id);
      return state;
    default:
      return state;
  }
};

export default todos;
