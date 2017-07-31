import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';

import Header from '../components/Header';
import Home from '../components/Home';
import VotePage from '../components/VotePage';
import NewProposalForm from '../components/NewProposalForm';
import { initialize } from '../store/config/actions';
import { createProposal, getProposal } from '../store/proposals/actions';
import { vote } from '../store/vote/actions';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialize());
  }

  handleCastVote = (index, support) => {
    this.props.dispatch(vote(index, support));
  };

  handleNewProposal = proposalText => {
    this.props.dispatch(createProposal(proposalText));
  };

  handleGetProposal = index => {
    this.props.dispatch(getProposal(index));
  };

  render() {
    return (
      <div className="app">
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <VotePage
                  proposal={this.props.proposal}
                  proposalCount={this.props.proposalCount}
                  handleCastVote={this.handleCastVote}
                  handleGetProposal={this.handleGetProposal}
                  voteError={this.props.voteError}
                />
              );
            }}
          />
          <Route path="/about" component={Home} />
        </Switch>

        <NewProposalForm
          addingProposal={this.props.addingProposal}
          handleNewProposal={this.handleNewProposal}
        />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    addingProposal: state.proposals.addingProposal,
    currentProposal: state.proposals.current,
    proposalCount: state.proposals.count,
    proposal: state.proposals.current,
    voteError: state.vote.error,
  };
}

export default withRouter(connect(mapStateToProps)(App));
