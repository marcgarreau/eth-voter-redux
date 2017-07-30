import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';

import Header from '../components/Header';
import Home from '../components/Home';
import VotePage from '../components/VotePage';
import NewProposalForm from '../components/NewProposalForm';
import { initialize } from '../store/config/actions';
import { createProposal } from '../store/proposals/actions';
import { vote } from '../store/vote/actions';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialize());
  }

  castVote = support => {
    const { dispatch, proposal } = this.props;
    dispatch(vote(proposal, support));
  };

  handleNewProposal = proposalText => {
    this.props.dispatch(createProposal(proposalText));
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
                  castVote={this.castVote}
                />
              );
            }}
          />
          <Route path="/about" component={Home} />
        </Switch>

        <NewProposalForm
          addingProposal={this.props.addingProposal}
          proposal={this.props.proposal}
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
    proposal: state.proposals.current,
  };
}

export default withRouter(connect(mapStateToProps)(App));
