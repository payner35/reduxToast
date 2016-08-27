import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';



const Toast = ({toastOpen, message, closeToast}) => {

    const _closeToast = () => {
        // the => means the scope of variables belongs this component
        closeToast();

        //this call the action
        //which then dispatches an event..
        //which is picked up by the reducer, which updates the state.
        //state is passed as a prop (toastOpen / message) from the container..
        //phew...
    };


    return (
        <div>
            <Snackbar
                open={toastOpen}
                message={message}
                autoHideDuration={4000}
                onRequestClose={_closeToast}
            />
        </div>
    );
};



Toast.propTypes = {
    allPois: React.PropTypes.array,
    hasErrors: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    toastOpen: React.PropTypes.bool,
    message: PropTypes.string,
    closeToast: PropTypes.func
};


export default Toast;
