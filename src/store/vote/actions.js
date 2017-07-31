import Vote from './service';
import { getProposal } from '../proposals/actions';

export function vote(index, support) {
  return async dispatch => {
    dispatch(voteRequest());
    try {
      const vote = await Vote.cast(index, support);
      dispatch(voteSuccess(vote));
      dispatch(getProposal(index));
    } catch (e) {
      dispatch(voteFailure());
    }
  };
}

export function voteRequest() {
  return { type: 'VOTE_REQUEST' };
}

export function voteSuccess(payload) {
  return { type: 'VOTE_SUCCESS', payload };
}

export function voteFailure(error) {
  return { type: 'VOTE_FAILURE', error: 'Only one vote is permitted.' };
}

export function dismissVoteError() {
  return { type: 'DISMISS_VOTE_ERROR' };
}
