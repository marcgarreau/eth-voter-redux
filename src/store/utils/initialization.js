import Web3 from 'web3';
import { contractABI, contractAddress } from './constants';

export function getWeb3() {
  // var web3 = window.web3;

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  // if (typeof web3 !== 'undefined') {
  // // Use Mist/MetaMask's provider.
  // web3 = new Web3(web3.currentProvider);
  // console.log('Injected web3 detected.');
  // return web3;
  // } else {

  // Fallback to localhost if no web3 injection.
  var provider = new Web3.providers.HttpProvider('http://localhost:8545');
  const web3 = new Web3(provider);
  window.web3 = web3;
  console.log('No web3 instance injected, using Local web3.');
  return web3;
  // }
}

export function getContractInterface(web3) {
  const contractInterface = web3.eth.contract(contractABI).at(contractAddress);
  window.contract = contractInterface;
  return contractInterface.address;
}

export function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
