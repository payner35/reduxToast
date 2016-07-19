import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



const propTypes = {
    data: React.PropTypes.object,
    addMediaImage: PropTypes.func,
    dispatch: PropTypes.func
};



const MediaItems = ({data, addMediaImage, mutations, dispatch}) => {

    //dispatch is passed in by the container..via Connect()

    const { allMediaImages } = data;

    //I do love functions in ES6
    const _doAmazingMutation = () => {
        // the => means the scope of variables belongs to MediaItems

        //looks like we have to pass the mutation to the action here...
        //this function uses the Thunk middleware..
        return dispatch(addMediaImage(mutations.addMediaImageMutation));
    };

    return (
        allMediaImages && allMediaImages.length > 0 ?

        <div>
            <h2>Media Items</h2>

            <RaisedButton
                label="Amazing Mutation"
                onClick={_doAmazingMutation}
            />

            <ul>
                {
                    allMediaImages.map((someMediaImage) => (
                        <li key={ someMediaImage._id }>
                            <p>{someMediaImage.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>

        : <p>No items to display yet..?</p>
    );
};

MediaItems.propTypes = propTypes;
MediaItems.displayName = "Media Items";
export default MediaItems;