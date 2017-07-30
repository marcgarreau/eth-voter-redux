const initialState = {
  addingProposal: false,
  count: 0,
  current: {
    index: -1,
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
      return { ...state, addingProposal: true };
    case 'CREATE_PROPOSAL_SUCCESS':
      return { ...state, addingProposal: false };
    default:
      return state;
  }
}

export default proposals;
