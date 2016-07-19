import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';


import MainLayout from '/imports/client/modules/core/containers/mainLayout';
import View_MediaGallery from '/imports/client/modules/mediaGallery/components/view_mediaGallery';


/**
 *
 * This is a snip of a larger project Im working on
 * The idea is to create a media gallery to upload and manage images.
 * the code is just enough to showcase some redux / mantra / apollo goodness..
 *
 * still learning... work in progress
 */


export default function (injectDeps) {

  const MainLayoutCtx = injectDeps(MainLayout);
  
  // Move these as a module and call this from a main file
  FlowRouter.route('/admin/media', {
    name: 'admin-media',
    action({}) {
      mount(MainLayoutCtx, {
        content: () => (<View_MediaGallery />)
      });
    }
  });

};





