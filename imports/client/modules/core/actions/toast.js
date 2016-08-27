export default {
    openToast({Meteor, Store}) {
        console.log('dispatching toast...');
        //this will be picked up by the reducer...
        return Store.dispatch({
            type: 'TOAST_SWITCH',
            toastOpen: true,
            message: 'I am an over complex TOAST instance...'
        });
    },
    closeToast({Meteor, Store}) {
        //this will be picked up by the reducer...
        return Store.dispatch({
            type: 'TOAST_SWITCH',
            toastOpen: false,
            message: 'Toast begone....'
        });
    },
    addMediaImage({}, mutation, variables) {
        return (dispatch, getState) => {
            //not sure if this is 100% correct.. but it works.
            //this is Thunk in action
            //we wait for the result.. and then auto dispatch to a listening reducer to update the state

            mutation(variables).then((result) => {
                if (result.data) {
                    console.log(result);
                    // if the mutation yields data, dispatch an action with that data
                    return dispatch ({
                        type: "UPDATE_MEDIA",
                        someMediaImage: result.data.addMediaImage //the mutation returns this object..
                    });
                }
            });
        };
    }
};