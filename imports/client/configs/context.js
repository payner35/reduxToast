import * as Collections from '/imports/lib/collections';
import {Meteor} from 'meteor/meteor';
import ApolloClient from 'apollo-client';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import { meteorClientConfig } from 'meteor/apollo';


//redux stuff
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'


export function initContext({ reducers }) {

  const Client = new ApolloClient(meteorClientConfig());
  

  const reducer = combineReducers({
    ...reducers,
    apollo: Client.reducer()
  });


  // put all Redux middleware here
  const middlewares = [
    createLogger(),
    Client.middleware(),
    ReduxThunk
  ];


  const Store = createStore(reducer, {}, applyMiddleware(...middlewares));

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Client,
    Store
  };
}
