import {useDeps} from 'mantra-core';
import {withRedux, composeAll} from 'react-komposer-plus';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import view_home from '../components/view_home';



const ADD_MEDIA_IMAGE = gql`
  mutation addMediaImageMutation ($name: String!, $cdnUrl: String!){
  addMediaImage(
     name: $name, cdnUrl: $cdnUrl) 
     {
        _id
        name
        cdnUrl
      }
}`;


const WITH_ADD_MEDIA_IMAGE = graphql(ADD_MEDIA_IMAGE, {
    //we are returning the mutation as a prop.
    //this will then be passed to the action
    props: ({ ownProps, mutate }) => ({
        addMediaImageMutation(variables ) {
            return mutate({
                variables: {...variables}
            });
        }
    })
});


const mapStateToProps = ({ core }) => ({
    someMediaImage: core.someMediaImage
});


export const depsMapper = (context, actions) => ({
    openToast: actions.toast.openToast,
    addMediaImage: actions.toast.addMediaImage,
    context: () => context
});


//interesting to note.. the order of these matter.. withRedux before useDeps
export default composeAll(
    withRedux(mapStateToProps),
    useDeps(depsMapper),
    WITH_ADD_MEDIA_IMAGE
)(view_home);