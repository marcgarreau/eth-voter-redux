const initialState = {
  count: 0,
  loading: false,
};

function proposals(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROPOSAL_COUNT_REQUEST':
      return { ...initialState, loading: true };
    case 'GET_PROPOSAL_COUNT_SUCCESS':
      return { ...initialState, count: action.payload };
    case 'GET_PROPOSALS_SUCCESS':
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
