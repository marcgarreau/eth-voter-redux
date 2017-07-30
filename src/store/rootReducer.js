import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import proposals from './proposals/reducer';

const root = combineReducers({
  config,
  proposals,
  router: routerReducer,
});

export default root;
