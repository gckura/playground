import React from 'react';
import '../styles/index.css';
import TodoContainer from '../containers/TodoContainer';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function TodoList({state}) {
  return (
    <div className="a__top">
      <h2>
        タスク一覧
        <Link to="edit">
          {' '}
          <Icon disabled name="plus" />
          タスクを作成
        </Link>
      </h2>

      <div>
        {state.todos.map(state => (
          <TodoContainer key={state.id} {...state} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
