export const contractAddress = '0xb8c72126d14bae9699ef0de9e4b3a84986981011';
export const contractABI = [
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'name', type: 'bytes32' },
      { name: 'voteCount', type: 'uint256' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'proposalHash', type: 'bytes32' }],
    name: 'addProposal',
    outputs: [],
    payable: false,
    type: 'function',
  },
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
