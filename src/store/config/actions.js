import { getWeb3, getContractInterface } from '../utils/initialization';
import { getProposalCount } from '../proposals/actions';

export function initialize(payload) {
  return async dispatch => {
    const web3 = await getWeb3();
    dispatch(getWeb3Success(web3.currentProvider.host));

    const contractAddress = await getContractInterface(web3);
    dispatch(getContractInterfaceSuccess(contractAddress));

    dispatch(getProposalCount());
  };
}

function getWeb3Success(host) {
  return { type: 'GET_WEB3_SUCCESS', payload: { host } };
}

function getContractInterfaceSuccess(contractAddress) {
  return {
    type: 'GET_CONTRACT_INTERFACE_SUCCESS',
    payload: { contractAddress },
  };
}
