export default function(state={}, action) {
    switch(action.type) {
      case 'CATEGORY_SELECTED':
        return action.payload;
      default:
        return state;
    }
  }
  