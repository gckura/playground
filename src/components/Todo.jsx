import React from 'react';
import '../styles/index.css';
import {Link} from 'react-router-dom';
import {Card, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Todo({id, title, text, target, targetfunction}) {
  return (
    <div className="a__todo">
      <Card>
        <Card.Content>
          <Card.Header>
            {id + 1}：{title}
            <Link
              to={'/update/' + id}
              onClick={() => {
                targetfunction(id);
              }}
            >
              <Icon disabled name="edit" />
            </Link>
          </Card.Header>
          <hr />
          <Card.Description>
            概要：
            {text}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Todo;
