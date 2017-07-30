import Proposal from './service';

export function getInitialProposal() {
  return async dispatch => {
    dispatch(getProposalCountRequest());
    const count = await Proposal.getCount();
    dispatch(getProposalCountSuccess(count));

    if (count) {
      dispatch(getProposal(0));
    }
  };
}

export function getProposal(index) {
  return async dispatch => {
    dispatch(getProposalRequest());
    const proposal = await Proposal.get(index);
    dispatch(getProposalSuccess(proposal, index));
  };
}

function getProposalRequest() {
  return { type: 'GET_PROPOSAL_REQUEST' };
}

function getProposalSuccess(payload, index) {
  return {
    type: 'GET_PROPOSAL_SUCCESS',
    payload: { text: payload[0], votes: payload[1], index },
  };
}

export function getProposalCount() {
  return async dispatch => {
    dispatch(getProposalCountRequest());
    const count = await Proposal.getCount();
    dispatch(getProposalCountSuccess(count));
  };
}

function getProposalCountRequest() {
  return { type: 'GET_PROPOSAL_COUNT_REQUEST' };
}

function getProposalCountSuccess(payload) {
  return { type: 'GET_PROPOSAL_COUNT_SUCCESS', payload };
}

export function createProposal(proposal) {
  return async dispatch => {
    dispatch({ type: 'CREATE_PROPOSAL_REQUEST' });
    try {
      const tx = await Proposal.create(proposal);
      dispatch({ type: 'CREATE_PROPOSAL_SUCCESS', payload: tx });
      dispatch(getProposalCount());
    } catch (e) {
      dispatch({ type: 'CREATE_PROPOSAL_FAILURE', error: e });
    }
  };
}
