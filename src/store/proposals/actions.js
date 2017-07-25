import Proposal from './service';

export function getProposals() {
  return async dispatch => {
    dispatch(getProposalsRequest());
    const proposals = await Proposal.getAll();
    console.log('proposals', proposals);
    dispatch(getProposalsSuccess(proposals));
  };
}

export function createProposal(proposal) {
  return async dispatch => {
    dispatch({ type: 'CREATE_PROPOSAL_REQUEST' });
    try {
      const newProposal = await Proposal.create(proposal);
      dispatch({ type: 'CREATE_PROPOSAL_SUCCESS', payload: newProposal });
      dispatch(getProposals());
    } catch (e) {
      dispatch({ type: 'CREATE_PROPOSAL_FAILURE', error: e });
    }
  };
}

function getProposalsRequest() {
  return { type: 'GET_PROPOSALS_REQUEST' };
}

function getProposalsSuccess(payload) {
  return { type: 'GET_PROPOSALS_SUCCESS', payload };
}
