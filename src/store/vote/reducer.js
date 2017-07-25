const initialState = {
  loading: false,
  voteMap: {},
};

export function vote(state = initialState, action) {
  switch (action.type) {
    case 'VOTE_REQUEST':
      return { ...state, loading: true };
    case 'VOTE_SUCCESS':
      return { ...state, loading: false };
  }
}
