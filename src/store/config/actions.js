import findWeb3 from '../utils/findWeb3';

export function initializeWeb3(payload) {
  return dispatch => {
    const payload = findWeb3();
    window.web3 = payload;
    dispatch({ type: 'SET_WEB3', payload: payload.currentProvider.host });
  };
}
