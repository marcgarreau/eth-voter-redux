import Vote from './service';

export function vote(proposal, support) {
  return async dispatch => {
    dispatch(voteRequest());
    const vote = await Vote.castVote(proposal, support);
    console.log('vote', vote);
  };
}

export function voteRequest() {
  return { type: 'VOTE_REQUEST' };
}
