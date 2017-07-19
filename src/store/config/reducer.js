const initialState = {
  contractAddress: '',
  loaded: false,
  proposalText: '',
  web3Host: '',
};

function config(state = initialState, action) {
  switch (action.type) {
    case 'GET_WEB3_SUCCESS':
      return { ...state, web3Host: action.payload.host };
    case 'GET_CONTRACT_INTERFACE_SUCCESS':
      return {
        ...state,
        contractAddress: action.payload.contractAddress,
        loaded: true,
      };
    case 'GET_PROPOSAL_SUCCESS':
      return {
        ...state,
        proposalText: action.payload.proposalText,
      };
    default:
      return state;
  }
}

export default config;
