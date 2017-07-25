import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons';

import { addItem } from '../store/items/actions';
import Header from '../components/Header';
import ListPage from '../components/ListPage';
import Home from '../components/Home';
import VotePage from '../components/VotePage';
import { initialize } from '../store/config/actions';
import { createProposal } from '../store/proposals/actions';
import { vote } from '../store/vote/actions';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proposalText: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(initialize());
  }

  handleAddItem = text => {
    this.props.dispatch(addItem(text));
  };

  castVote = support => {
    const { dispatch, proposal } = this.props;
    dispatch(vote(proposal, support));
  };

  handleNewProposal = () => {
    this.props.dispatch(createProposal(this.state.proposalText));
    this.setState({ proposalText: '' });
  };

  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" component={Home} />
        <Route
          path="/vote"
          component={() => {
            return (
              <VotePage
                proposal={this.props.proposal}
                castVote={this.castVote}
              />
            );
          }}
        />
        <Route
          path="/list"
          component={() => {
            return (
              <ListPage items={this.props.items} addItem={this.handleAddItem} />
            );
          }}
        />

        <div className="new-proposal-wrapper">
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
        </div>
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
    items: state.items.list,
    proposal: state.config.proposalText,
  };
}

export default withRouter(connect(mapStateToProps)(App));
