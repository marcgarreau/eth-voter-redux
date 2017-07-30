const initialState = {
  count: 0,
  current: null,
  addingProposal: false,
};

function proposals(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROPOSAL_COUNT_REQUEST':
      return { ...initialState, loading: true };
    case 'GET_PROPOSAL_COUNT_SUCCESS':
      return { ...initialState, count: action.payload };
    case 'GET_PROPOSAL_SUCCESS':
      return { ...state, current: action.payload };
    case 'CREATE_PROPOSAL_REQUEST':
      return { ...state, addingProposal: true };
    case 'CREATE_PROPOSAL_SUCCESS':
      return { ...state, addingProposal: false };
    default:
      return state;
  }
}

export default proposals;
