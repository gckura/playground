import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import TodoApp from './containers/TodoApp';
import createStore from './store';

//Storeの作成
const store = createStore();

render(
  <Provider store={store}>
    <div>
      <TodoApp />
    </div>
  </Provider>,
  document.getElementById('root')
);
