import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import tasksReducer from '../reducers/tasks';
import logger from 'redux-logger';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
    }),
    savedState ? savedState : tasksReducer(undefined, { type: 'Init' }),
    applyMiddleware(logger, storageMiddleware)
  );
}

const savedState = JSON.parse(localStorage.getItem('app-state'));

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};
