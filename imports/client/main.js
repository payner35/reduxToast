import {initContext} from './configs/context';
import {createApp} from 'mantra-core';
import injectTapEventPlugin from 'react-tap-event-plugin';


//modules
import coreModule from './modules/core';
import mediaGalleryModule from './modules/mediaGallery';


const reducers = ({
    ...coreModule.reducers,
    ...mediaGalleryModule.reducers
});


// init context
const context = initContext({ reducers });

//create client
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(mediaGalleryModule);
app.init();

injectTapEventPlugin();

