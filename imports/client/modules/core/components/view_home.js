import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Toast from '../containers/toast';


const View_Home = ({openToast}) => {

    //I do love functions in ES6
    const _goToast = () => {
        // the => means the scope of variables belongs to this component
        openToast(); //calls the Action.
    };

    return (
        <div className="viewHome">
            <RaisedButton
                label="LETS TOAST"
                style={{margin: 12}}
                onClick={_goToast}/>
            
            <Toast />
        </div>
    );
   
};

View_Home.displayName = "View Home";
export default View_Home;