/* @flow */
import React from 'react';
import '../styles/index.css';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Edit({addTaskfunction}) {
  let input;
  let textarea;
  return (
    <div className="a__edit">
      <p>タイトル</p>
      <input
        ref={node => {
          input = node;
        }}
        placeholder="タイトルを入力してください。"
      />

      <p>概要</p>

      <textarea
        ref={node => {
          textarea = node;
        }}
        placeholder="内容をを入力してください。"
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
              addTaskfunction(input.value, textarea.value);
              input.value = '';
              textarea.value = '';
            }}
          >
            作成
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Edit;
