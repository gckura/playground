import React from 'react';
import '../styles/index.css';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Update({state, target, updatefunction, deleatfunction}) {
  let input;
  let textarea;
  let title = '';
  let text = '';
  for (var i of state.todos) {
    if (i.id === target) {
      title = i.title;
      text = i.text;
    }
  }

  return (
    <div className="a__update">
      <p>タイトル</p>
      <input
        ref={node => {
          input = node;
        }}
        placeholder={title}
      />
      <p>概要</p>

      <textarea
        ref={node => {
          textarea = node;
        }}
        placeholder={text}
      />
      <div>
        <Link to="/">
          <Button>キャンセル</Button>
        </Link>
        <Link to="/">
          <Button
            basic
            color="green"
            onClick={() => {
              updatefunction(target, input.value, textarea.value);
              input.value = '';
              textarea.value = '';
            }}
          >
            更新
          </Button>
        </Link>
        <Link to="/">
          <Button
            basic
            color="red"
            onClick={() => {
              deleatfunction(target);
            }}
          >
            削除
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Update;
