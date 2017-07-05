const initialState = {
  web3Host: {},
};

function config(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEB3':
      return { ...state, web3Host: action.payload };
    default:
      return state;
  }
}

export default config;
