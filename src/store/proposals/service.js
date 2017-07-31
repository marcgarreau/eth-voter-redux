class Proposal {
  getCount() {
    return new Promise(resolve => {
      window.web3.eth.getAccounts(async (e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          const bn = await window.contract.getProposalCount.call({
            from: accounts[0],
          });
          resolve(bn.toNumber());
        } else {
          console.log('boom!');
        }
      });
    });
  }

  get(index) {
    return new Promise(resolve => {
      window.web3.eth.getAccounts((e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          window.contract.getProposal.call(
            index,
            {
              from: accounts[0],
              gas: 150000,
            },
            (e, response) => {
              resolve(response);
            }
          );
        } else {
          console.log('boom!');
        }
      });
    });
  }

  create(proposal) {
    return new Promise(resolve => {
      window.web3.eth.getAccounts((e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          window.contract.addProposal(
            proposal,
            {
              from: accounts[0],
              gas: 150000,
            },
            (e, response) => {
              resolve(response);
            }
          );
        } else {
          console.log('boom!');
        }
      });
    });
  }
}

export default new Proposal();
