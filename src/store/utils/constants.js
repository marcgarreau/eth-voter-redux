export const contractAddress = '0x1d1803a80bf9d643769c806d1c9e139c21e1256b';
export const contractABI = [
  {
    constant: false,
    inputs: [
      { name: 'proposalHash', type: 'bytes32' },
      { name: 'pro', type: 'bool' },
    ],
    name: 'vote',
    outputs: [],
    payable: false,
    type: 'function',
  },
  { payable: false, type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'proposalHash', type: 'bytes32' },
      { indexed: false, name: 'pro', type: 'bool' },
      { indexed: false, name: 'addr', type: 'address' },
    ],
    name: 'LogVote',
    type: 'event',
  },
];
