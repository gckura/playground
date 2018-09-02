/* @flow */
import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
import todoApp from '../reducers';

export default function createStore() {
  return reduxCreateStore(
    todoApp,
    savedState ? savedState : todoApp(undefined, {type: 'Init'}),
    applyMiddleware(storageMiddleware),
  );
}

const savedState = JSON.parse(localStorage.getItem('crud-state'));

export let maxId = savedState
  ? savedState.todos[savedState.todos.length - 1].id + 1
  : 0;

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('crud-state', JSON.stringify(store.getState()));
  return result;
};
