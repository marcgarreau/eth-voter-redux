const initialState = {
  count: 0,
  current: {
    closed: false,
    index: -1,
    owner: '',
    text: '',
    votes: 0,
  },
  loading: false,
};

function proposals(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROPOSAL_COUNT_REQUEST':
      return { ...initialState, loading: true };
    case 'GET_PROPOSAL_COUNT_SUCCESS':
      return { ...initialState, count: action.payload, loading: false };
    case 'GET_PROPOSAL_SUCCESS':
      return { ...state, current: action.payload, loading: false };
    case 'CREATE_PROPOSAL_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_PROPOSAL_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_PROPOSAL_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default proposals;
