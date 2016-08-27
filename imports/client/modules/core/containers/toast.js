import {useDeps} from 'mantra-core';
import {withRedux, composeAll} from 'react-komposer-plus';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import toast from '../components/toast';


/**
 *
 * Notice the react-komposer-plus package.. this has some handy Redux stuff.
 * Which means we stay away from using Redux Connect() in the ComposeAll function
 *
 * We use the new GraphQL connector to handle the main query
 * http://docs.apollostack.com/apollo-client/react.html
 */



const GET_POIS = gql`
   query allPois {
      allPois {
        _id
        type
        region
      }
    }`;

//we can define the exact props we want.. this is a good habit
//instead of just dumping a data object to the component
const GET_POIS_WITH_PROPS = graphql(GET_POIS, {
    props: ({ ownProps, data }) => {
        if (data.loading) return { loading: true };
        if (data.error) return { hasErrors: true };
        return {
            allPois: data.allPois
        };
    }
});



const mapStateToProps = ({ core }) => ({
    toastOpen: core.toastOpen,
    message: core.message
});


//sending te actions and context to the component
const mapDepsToProps = (context, actions) => ({
    closeToast: actions.toast.closeToast,
    context: () => context
});



export default composeAll(
    withRedux(mapStateToProps),
    useDeps(mapDepsToProps),
    GET_POIS_WITH_PROPS
)(toast);

