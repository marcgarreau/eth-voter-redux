pragma solidity ^0.4.13;

contract VoterContract {
    Proposal[] public proposals;

    event LogProposal(string indexed proposal, uint proposalCount, address addr);
    event LogVote(string indexed proposal, bool pro, address addr);

    struct Proposal {
        address owner;
        string text;
        uint voteCount;
        bool closed;
    }

    function getProposalCount() public returns (uint) {
        return proposals.length;
    }

    function getProposal(uint index) public returns (string, uint, address, bool) {
        return (proposals[index].text, proposals[index].voteCount, proposals[index].owner, proposals[index].closed);
    }

    function addProposal(string proposal) public {
        proposals.push(Proposal({
            owner: msg.sender,
            text: proposal,
            voteCount: 0,
            closed: false
        }));
        LogProposal(proposal, proposals.length, msg.sender);
    }

    function closeProposal(uint index) public {
      if (msg.sender != proposals[index].owner) { revert(); }

      proposals[index].closed = true;
    }

    function vote(uint index, bool pro) {
        LogVote(index, pro, msg.sender);
    }

    function () { revert(); }
}
