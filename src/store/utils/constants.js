export const contractAddress = '0xd511e84e3e535490c074e606e3f6838223243c52';
export const contractABI = [
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'text', type: 'string' },
      { name: 'voteCount', type: 'uint256' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'proposal', type: 'string' },
      { name: 'pro', type: 'bool' },
    ],
    name: 'vote',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'proposal', type: 'string' }],
    name: 'addProposal',
    outputs: [{ name: '', type: 'uint256' }, { name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'getProposalCount',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'getProposal',
    outputs: [{ name: '', type: 'string' }, { name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  { payable: false, type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'proposal', type: 'string' },
      { indexed: false, name: 'proposalCount', type: 'uint256' },
      { indexed: false, name: 'addr', type: 'address' },
    ],
    name: 'LogProposal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'proposal', type: 'string' },
      { indexed: false, name: 'pro', type: 'bool' },
      { indexed: false, name: 'addr', type: 'address' },
    ],
    name: 'LogVote',
    type: 'event',
  },
];
