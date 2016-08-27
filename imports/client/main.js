import {initContext} from './configs/context';
import {createApp} from 'mantra-core';
import injectTapEventPlugin from 'react-tap-event-plugin';


//modules
import coreModule from './modules/core';


const reducers = ({
    ...coreModule.reducers
});


// init context
const context = initContext({ reducers });

//create client
const app = createApp(context);
app.loadModule(coreModule);

app.init();
injectTapEventPlugin();



