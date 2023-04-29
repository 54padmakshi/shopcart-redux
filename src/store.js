import thunk from 'redux-thunk';
import {applyMiddleware , createStore} from 'redux';
import rootReducer from './Reducers';

 const  datastore = createStore (rootReducer , applyMiddleware(thunk));
 export default datastore;