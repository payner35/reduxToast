
export default {
    addMediaImage({}, mutation) {
        return (dispatch) => {
            //not sure if this is 100% correct.. but it works.
            //this is Thunk in action
            //we wait for the result.. and then auto dispatch eo a listening reducer to update the state
            mutation().then((result) => {
                if (result.data) {
                    // if the mutation yields data, dispatch an action with that data
                    return dispatch ({
                        type: "UPDATE_MEDIA",
                        newMediaItem: result.data
                    });
                }
            });
        };
    }
};