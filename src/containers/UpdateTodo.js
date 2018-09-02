import {connect} from 'react-redux';
import Update from '../components/Update';
import {updateTodo, deleteTodo} from '../actions';

const mapStateToProps = state => {
  return {
    id: state.todos.id,
    title: state.todos.title,
    text: state.todos.text,
    target: state.target.targetId,
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatefunction: (id, title, text) => {
      dispatch(updateTodo(id, title, text));
    },
    deleatfunction: id => {
      dispatch(deleteTodo(id));
    },
  };
};

const UpdateTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Update);
export default UpdateTodo;
