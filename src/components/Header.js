import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons';
import Toolbar from 'react-md/lib/Toolbars';
import { withRouter } from 'react-router';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/Header.scss';

export class Header extends Component {
  render() {
    const { history } = this.props;

    const actions = [
      <Button icon key="home" onClick={() => history.push('/about')}>
        home
      </Button>,
      <Button icon key="vote" onClick={() => history.push('/')}>
        check_box
      </Button>,
    ];

    return (
      <div className="header">
        <Toolbar
          actions={actions}
          themed
          nav={
            <Button key="nav" icon>
              menu
            </Button>
          }
          title="Accelerator"
        />
        <div className="header__body">
          <img src={logo} className="header__logo" alt="logo" />
          <h2 className="header__title">EthVoterRedux</h2>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Header);
