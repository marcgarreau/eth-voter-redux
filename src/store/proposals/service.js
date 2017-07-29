class Proposal {
  async getCount() {
    return await new Promise(resolve => {
      window.web3.eth.getAccounts(async (e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          const bn = await window.contract.getProposalCount.call({
            from: accounts[0],
          });
          resolve(bn.c[0]);
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
          const x = await window.contract.proposals.call(null, {
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

  async create(proposal) {
    return await new Promise(resolve => {
      window.web3.eth.getAccounts(async (e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          debugger;
          const x = await window.contract.addProposal.call(proposal, {
            from: accounts[0],
          });
          console.log('prop', x);
          resolve(x);
        } else {
          console.log('boom!');
        }
      });
    });
  }
}

export default new Proposal();
