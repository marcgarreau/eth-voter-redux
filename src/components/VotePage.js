import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons';

import '../assets/stylesheets/VotePage.scss';

class VotePage extends Component {
  handleCastVote = (index, support) => {
    this.props.handleCastVote(index, support);
  };

  handleGetProposal = index => {
    this.props.handleGetProposal(index);
  };

  handleCloseVote = index => {
    this.props.handleCloseVote(index);
  };

  handleVoteErrorDismiss = index => {
    this.props.handleVoteErrorDismiss();
  };

  renderError() {
    if (this.props.voteError) {
      return (
        <div className="vote-page__error">
          {this.props.voteError}
          <div
            className="vote-page__error-dismiss"
            onClick={this.handleVoteErrorDismiss}
          >
            x
          </div>
        </div>
      );
    }
  }

  render() {
    const { proposal, proposalCount } = this.props;

    if (!proposal.text) {
      return (
        <div className="vote-page__null-state">
          No proposals up for vote yet! Add one below:
        </div>
      );
    }

    return (
      <div className="vote-page-wrapper">
        {this.renderError()}
        <div className="vote-page__proposal">
          {proposal.text}
        </div>
        <div className="vote-page__votes">
          {`${proposal.votes} net votes`}
        </div>
        <div className="vote-page__btn-wrapper">
          <Button
            icon
            primary
            disabled={proposal.index === 0}
            onClick={() => this.handleGetProposal(proposal.index - 1)}
          >
            keyboard_arrow_left
          </Button>
          <Button
            raised
            secondary
            className="vote-page__btn"
            disabled={proposal.closed}
            label="No"
            onClick={() => this.handleCastVote(proposal.index, false)}
          />
          <Button
            raised
            primary
            className="vote-page__btn"
            disabled={proposal.closed}
            label="Yes"
            onClick={() => this.handleCastVote(proposal.index, true)}
          />
          <Button
            icon
            primary
            disabled={proposalCount === proposal.index + 1}
            onClick={() => this.handleGetProposal(proposal.index + 1)}
          >
            keyboard_arrow_right
          </Button>
        </div>
      </div>
    );
  }
}

VotePage.propTypes = {
  proposal: PropTypes.object,
};

export default VotePage;
