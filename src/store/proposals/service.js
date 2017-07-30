class Proposal {
  async getCount() {
    return await new Promise(resolve => {
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

  async getAll() {
    return await new Promise(resolve => {
      window.web3.eth.getAccounts(async (e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          const x = await window.contract.proposals(null, {
            from: accounts[0],
          });
          console.log('x', x);
          resolve(x[0]);
        } else {
          console.log('boom!');
        }
      });
    });
  }

  create(proposal) {
    return new Promise(resolve => {
      window.web3.eth.getAccounts(async (e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          window.contract.addProposal(
            proposal,
            {
              from: accounts[0],
            },
            (e, response) => {
              console.log('response', response);
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
