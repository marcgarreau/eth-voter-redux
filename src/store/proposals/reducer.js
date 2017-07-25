const initialState = {
  list: [],
};

function proposals(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROPOSALS_SUCCESS':
      return { ...state, list: action.payload };
  }
}
