pragma solidity ^0.4.13;

contract VoterContract {
    Proposal[] public proposals;

    event LogVote(string indexed proposalHash, bool pro, address addr);

    struct Proposal {
        string name;
        uint voteCount;
    }

    function getProposalCount() public returns (uint) {
        return proposals.length;
    }

    function getProposal(uint index) public returns (string, uint) {
        return (proposals[index].name, proposals[index].voteCount);
    }

    function addProposal(string proposalHash) {
        proposals.push(Proposal({
            name: proposalHash,
            voteCount: 0
        }));
    }

    function vote(string proposal, bool pro) {
        LogVote(proposal, pro, msg.sender);
    }

    function () { revert(); }
}
