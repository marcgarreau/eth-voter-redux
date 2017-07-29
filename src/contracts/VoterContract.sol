pragma solidity ^0.4.13;

contract VoterContract {
    Proposal[] public proposals;

    event LogProposal(string indexed proposal, uint proposalCount, address addr);
    event LogVote(string indexed proposal, bool pro, address addr);

    struct Proposal {
        string text;
        uint voteCount;
    }

    function getProposalCount() public returns (uint) {
        return proposals.length;
    }

    function getProposal(uint index) public returns (string, uint) {
        return (proposals[index].text, proposals[index].voteCount);
    }

    function addProposal(string proposal) public returns (uint, string) {
        proposals.push(Proposal({
            text: proposal,
            voteCount: 0
        }));
        LogProposal(proposal, proposals.length, msg.sender);
    }

    function vote(string proposal, bool pro) {
        LogVote(proposal, pro, msg.sender);
    }

    function () { revert(); }
}
