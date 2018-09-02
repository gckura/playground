import {connect} from 'react-redux';
import Todo from '../components/Todo';
import {targetTodo} from '../actions';

const mapStateToProps = state => {
  return {target: state.target['targetId']};
};

const mapDispatchToProps = dispatch => {
  return {
    targetfunction: id => {
      dispatch(targetTodo(id));
    },
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
export default TodoContainer;
