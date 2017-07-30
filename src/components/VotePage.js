import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons';

import '../assets/stylesheets/VotePage.scss';

class VotePage extends Component {
  castVote = pro => {
    this.props.castVote(pro);
  };

  handleGetProposal = index => {
    this.props.handleGetProposal(index);
  };

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
        <div className="vote-page__proposal">
          {proposal.text}
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
            primary
            className="vote-page__btn"
            label="Yes"
            onClick={() => this.castVote(true)}
          />
          <Button
            raised
            secondary
            className="vote-page__btn"
            label="No"
            onClick={() => this.castVote(false)}
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
