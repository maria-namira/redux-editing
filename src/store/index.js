import { createStore, combineReducers } from 'redux';
import fieldChangeReducer from '../reducers/fieldChangeReducer';
import serviceListReducer from '../reducers/serviceListReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  item: fieldChangeReducer,
  list: serviceListReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());