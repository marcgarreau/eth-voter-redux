import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import items from './items/reducer';
import proposals from './proposals/reducer';

const root = combineReducers({
  config,
  items,
  proposals,
  router: routerReducer,
});

export default root;
