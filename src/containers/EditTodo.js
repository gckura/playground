import {connect} from 'react-redux';
import Edit from '../components/Edit';
import {addTodo} from '../actions';

const mapStateToProps = state => {
  return {title: state.todos.title, text: state.todos.text};
};

const mapDispatchToProps = dispatch => {
  return {
    addTaskfunction: (title, text) => {
      dispatch(addTodo(title, text));
    },
  };
};

const EditTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
export default EditTodo;
