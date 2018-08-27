import React from 'react';
import '../styles/TodoApp.css';

export default function TodoApp({
  task,
  tasklist,
  inputTask,
  addTask,
  deleteTask_All,
}) {
  return (
    <div className="a__todoApp">
      <input type="text" onChange={e => inputTask(e.target.value)} />
      <input type="button" value="追加" onClick={() => addTask(task)} />
      <div>
        {tasklist.map(function(item, i) {
          return (
            <li key={i}>
              <span>{item}</span>
            </li>
          );
        })}
      </div>
      <input type="button" value="全て消去" onClick={() => deleteTask_All()} />
    </div>
  );
}
