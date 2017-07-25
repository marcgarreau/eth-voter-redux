class Vote {
  castVote(proposal, support) {
    const proposalHash = window.web3.sha3(encodeURI(proposal));

    window.web3.eth.getAccounts((e, accounts) => {
      console.log('e', e);
      console.log('accounts', accounts);
      // Check if there are accounts available
      if (!e && accounts && accounts.length > 0) {
        // Create a dialog requesting the transaction
        const resp = window.contract.vote(proposalHash, support, {
          from: accounts[0],
        });
        console.log('resp', resp);
        return resp;
      } else {
        console.log('mist', window.mist);
        window.mist.requestAccount((e, account) => {
          if (!e) {
            // Create a dialog requesting the transaction
            window.contract.vote(proposalHash, support, {
              from: account.toLowerCase(),
            });
          }
        });
      }
    });
  }
}

export default new Vote();
