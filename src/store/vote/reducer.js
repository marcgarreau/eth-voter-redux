const initialState = {
  error: '',
  loading: false,
  voteMap: {},
};

function vote(state = initialState, action) {
  switch (action.type) {
    case 'VOTE_REQUEST':
      return { ...state, loading: true };
    case 'VOTE_SUCCESS':
      return { ...state, loading: false };
    case 'VOTE_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default vote;
