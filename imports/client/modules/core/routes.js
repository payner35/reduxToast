import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

//mainLayout is the main view...
import MainLayout from './containers/mainLayout';
import Home from './containers/view_home';



export default function (injectDeps) {

  const MainLayoutCtx = injectDeps(MainLayout);


  // Move these as a module and call this from a main file
  FlowRouter.route('/home', {
    name: 'home',
    action({}) {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

};





