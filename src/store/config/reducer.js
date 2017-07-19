const initialState = {
  web3Host: '',
  contractAddress: '',
};

function config(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEB3':
      return { ...state, web3Host: action.payload.host };
    case 'SET_CONTRACT_INTERFACE':
      return {
        ...state,
        contractAddress: action.payload.contractAddress,
      };
    default:
      return state;
  }
}

export default config;
