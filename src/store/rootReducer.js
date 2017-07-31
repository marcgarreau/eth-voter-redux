import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import proposals from './proposals/reducer';
import vote from './vote/reducer';

const root = combineReducers({
  config,
  proposals,
  router: routerReducer,
  vote,
});

export default root;
