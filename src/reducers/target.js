const target = (state = -1, action) => {
  switch (action.type) {
    case 'TARGET_TODO':
      return {targetId: action.id};
    default:
      return state;
  }
};

export default target;
