const initialState = {
  task: '',
  tasklist: [],
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasklist: state.tasklist.concat([action.payload.task]),
        id: action.id,
      };
    case 'DELETE_TASK_ALL':
      return {
        ...state,
        tasklist: [],
      };
    default:
      return state;
  }
}
