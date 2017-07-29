export const contractAddress = '0x390ea701945b126c336e3d35edcc0a577d08f841';
export const contractABI = [
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'name', type: 'string' },
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
    inputs: [{ name: 'proposalHash', type: 'string' }],
    name: 'addProposal',
    outputs: [],
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
      { indexed: true, name: 'proposalHash', type: 'string' },
      { indexed: false, name: 'pro', type: 'bool' },
      { indexed: false, name: 'addr', type: 'address' },
    ],
    name: 'LogVote',
    type: 'event',
  },
];
