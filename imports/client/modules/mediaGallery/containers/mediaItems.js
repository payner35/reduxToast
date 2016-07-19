import {useDeps, composeAll, compose} from 'mantra-core';
import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import MediaItems from '../components/mediaItems';



const mapQueriesToProps = ({ ownProps }) => {
    return {
        data: {
            query: gql`
                query mediaImages {
                  allMediaImages {
                   _id
                    name
                    cdnUrl
                    size
                    uuid
                  }
                }`,
            forceFetch: false
        }
    };
};


function addMediaImageMutation() {
    //basic mutation to create the same object every time..
    return {
        mutation: gql `
           mutation addMediaImageMutation {
                addMediaImage (
                    name: "Some Name here",
                    cdnUrl: "http://www.url.com"
                ) 
                  {
                    _id
                    name
                  }
                }`
    };
};


function mapMutationsToProps({ ownProps }) {
    return {
        addMediaImageMutation: addMediaImageMutation
    };
}

//notice we send the action... and the mutation tot the component.
// not sure why we can't just combine them here.. ?

export const mapDepsToProps = (context, actions) => ({
    addMediaImage: actions.image.addMediaImage,
    context: () => context
});

export default composeAll(
    connect({
        mapQueriesToProps,
        mapMutationsToProps
    }),
    useDeps(mapDepsToProps)
)(MediaItems);