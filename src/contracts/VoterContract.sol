pragma solidity ^0.4.13;

contract VoterContract {
    Proposal[] public proposals;

    event LogVote(bytes32 indexed proposalHash, bool pro, address addr);

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    function addProposal(bytes32 proposalHash) {
        proposals.push(Proposal({
            name: proposalHash,
            voteCount: 0
        }));
    }

    function vote(bytes32 proposalHash, bool pro) {
        LogVote(proposalHash, pro, msg.sender);
    }

    function () { revert(); }
}
