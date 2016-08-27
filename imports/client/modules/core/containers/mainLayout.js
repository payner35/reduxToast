import {useDeps, composeAll, compose} from 'mantra-core';
import mainLayout from '../components/mainLayout';


const onPropsChange = ({ context }, onData) => {
    //we need to pass the Store & Client to get ApolloProvider working...
    const { Client, Store } = context();
    onData(null, {
        client: Client,
        store: Store
    });
};


export default composeAll(
    compose(onPropsChange),
    useDeps()
)(mainLayout);



