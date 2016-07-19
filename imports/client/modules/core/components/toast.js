import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';


const propTypes = {
    //this is a really good habit
    //makes it easier to track what type of props are hitting the component
    //especialy good to know with the various triggers from a Redux powered container..
    toastOpen: React.PropTypes.bool,
    message: PropTypes.string,
    closeToast: PropTypes.func
};


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


Toast.propTypes = propTypes;
export default Toast;
