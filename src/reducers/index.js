import {combineReducers} from 'redux';
import todos from './todos';
import target from './target';

const todoApp = combineReducers({todos, target});
export default todoApp;
