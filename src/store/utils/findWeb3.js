import Web3 from 'web3';

export default function findWeb3() {
  var web3 = window.web3;

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  // if (typeof web3 !== 'undefined') {
  // // Use Mist/MetaMask's provider.
  // web3 = new Web3(web3.currentProvider);
  // console.log('Injected web3 detected.');
  // return web3;
  // } else {

  // Fallback to localhost if no web3 injection.
  var provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
  console.log('No web3 instance injected, using Local web3.');
  return web3;
  // }
}
