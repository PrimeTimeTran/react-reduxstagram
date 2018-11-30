function postComments(state = [], { type, author, comment, idx }) {
  switch(type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: author,
        text: comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments
