import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, deleteTask_All } from '../actions/tasks';

function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasklist: tasks.tasklist,
    delete_number: tasks.delete_number,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    deleteTask_All() {
      dispatch(deleteTask_All());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
