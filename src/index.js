/* @flow */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Header from './components/Header';
import UpdateTodo from './containers/UpdateTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import EditTodo from './containers/EditTodo';
import todos from './reducers';
import createStore from './store';

//Storeの作成
let store = createStore(todos);

render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Header />
        <Route exact path="/" component={VisibleTodoList} />
        <Route exact path="/edit" component={EditTodo} />
        <Route exact path="/update/:id" component={UpdateTodo} />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
