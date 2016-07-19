import React, { PropTypes } from 'react';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'


const propTypes = {
    nav: PropTypes.func,
    content: PropTypes.func.isRequired,
    footer: PropTypes.func,
    client: PropTypes.object,
    store: PropTypes.object
};


const Layout = ({
        content = () => null,
        nav = () => null,
        footer = () => null,
        client,
        store
    }) => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ApolloProvider client={client} store={store}>
            <div>
                <header>
                    {nav()}
                </header>

                <div>
                    {content()}
                </div>

                <footer>
                </footer>
            </div>
        </ApolloProvider>
    </MuiThemeProvider>
);

Layout.propTypes = propTypes;
Layout.displayName = "Main Layout";

export default Layout;
