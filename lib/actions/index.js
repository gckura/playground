import { maxId } from '../store/index';

let nextTodoId = maxId;
export const addTodo = (title, text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const updateTodo = (id, title, text) => {
  return {
    type: 'UPDATE_TODO',
    id,
    title,
    text
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const targetTodo = id => {
  return {
    type: 'TARGET_TODO',
    id
  };
};