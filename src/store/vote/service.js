class Vote {
  cast(index, support) {
    return new Promise((resolve, reject) => {
      window.web3.eth.getAccounts((e, accounts) => {
        if (!e && accounts && accounts.length > 0) {
          try {
            const voteValue = support ? 1 : -1;
            const tx = window.contract.vote(index, voteValue, {
              from: accounts[0],
            });
            resolve(tx);
          } catch (e) {
            reject(e);
          }
        } else {
          reject("We're having trouble connecting to your account!");
        }
      });
    });
  }
}

export default new Vote();
