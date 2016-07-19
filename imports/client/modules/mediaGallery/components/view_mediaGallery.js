import React, { PropTypes } from 'react';
import MediaItems from '../containers/mediaItems';


const View_MediaGallery = ({}) => (
    <div>
        <h2>Media Gallery</h2>
        <MediaItems />
    </div>
);

View_MediaGallery.displayName = "View MediaGallery";
export default View_MediaGallery;