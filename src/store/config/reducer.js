const initialState = {
  contractAddress: '',
  initialized: false,
  loaded: false,
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
    case 'INITIALIZATION_SUCCESS':
      return { ...state, initialized: true };
    default:
      return state;
  }
}

export default config;
