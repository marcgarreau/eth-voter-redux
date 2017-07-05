import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import items from './items/reducer';

const root = combineReducers({
  config,
  items,
  router: routerReducer,
});

export default root;
