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
    }
};