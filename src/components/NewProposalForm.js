import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons';
import Loader from 'react-loader';

class NewProposalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proposalText: '',
    };
  }

  handleNewProposal = () => {
    this.props.handleNewProposal(this.state.proposalText);
    this.setState({ proposalText: '' });
  };

  render() {
    return (
      <div className="new-proposal-wrapper">
        <Loader className="loader" loaded={!this.props.addingProposal}>
          <TextField
            id="new-proposal"
            label="New Proposal"
            onChange={value => this.setState({ proposalText: value })}
            value={this.state.proposalText}
          />
          <Button
            label="Submit"
            disabled={!this.state.proposalText.length}
            onClick={() => this.handleNewProposal()}
            primary
            raised
          />
        </Loader>
      </div>
    );
  }
}

export default NewProposalForm;
