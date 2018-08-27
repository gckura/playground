export const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  },
});

let nextTodoId = 0;
export const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    task,
    id: nextTodoId++,
  },
});

export const deleteTask_All = () => ({
  type: 'DELETE_TASK_ALL',
});
