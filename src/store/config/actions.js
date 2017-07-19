import { getWeb3, getContractInterface } from '../utils/initialization';

export function initialize(payload) {
  return async dispatch => {
    const web3 = await getWeb3();
    dispatch(getWeb3Success(web3.currentProvider.host));

    const contractAddress = await getContractInterface(web3);
    dispatch(getContractInterfaceSuccess(contractAddress));
  };
}

function getWeb3Success(host) {
  return { type: 'SET_WEB3', payload: { host } };
}

function getContractInterfaceSuccess(contractAddress) {
  return { type: 'SET_CONTRACT_INTERFACE', payload: { contractAddress } };
}
