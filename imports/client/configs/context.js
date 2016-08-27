import * as Collections from '/imports/lib/collections';
import {Meteor} from 'meteor/meteor';
import { meteorClientConfig } from 'meteor/apollo';
import ApolloClient from 'apollo-client';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';


//redux stuff
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'


export function initContext({ reducers }) {

  //powered by the Meteor Atmosphere Package.. "meteorClientConfig"
  const Client = new ApolloClient(meteorClientConfig());

  const reducer = combineReducers({
    ...reducers,
    apollo: Client.reducer()
  });


  // put all Redux middleware here
  const middleware = [
    createLogger(),
    Client.middleware(),
    ReduxThunk
  ];


  let Store = createStore(reducer, {}, compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Client,
    Store,
    dispatch: Store.dispatch
  };
}
