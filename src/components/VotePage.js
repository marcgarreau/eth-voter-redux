import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons';

import '../assets/stylesheets/VotePage.scss';

class VotePage extends Component {
  castVote = pro => {
    this.props.castVote(pro);
  };

  render() {
    return (
      <div className="vote-page-wrapper">
        <div className="vote-page__proposal">
          {this.props.proposal}
        </div>
        <div className="vote-page__btn-wrapper">
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
        </div>
      </div>
    );
  }
}

VotePage.propTypes = {
  proposal: PropTypes.string,
};

export default VotePage;
