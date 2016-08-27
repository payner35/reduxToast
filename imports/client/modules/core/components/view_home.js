import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Toast from '../containers/toast';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { If, Then, Else } from 'react-if';



const View_Home = ({openToast, addMediaImageMutation, addMediaImage, context, someMediaImage}) => {

    //I do love functions in ES6
    const _goToast = () => {
        // the => means the scope of variables belongs to this component
        openToast(); //calls the Action.
    };


    const _goMutate = () => {

        //dispatch is in the Mantra context..
        const { dispatch } = context();

        //im gonna mutate...
        //looks like we have to pass the mutation to the action here...
        //this function then uses the Thunk middleware..(i think)

        const variables =  {
            name: "I am the MUTATION....",
            cdnUrl: "https://img.ifcdn.com/images/d1e8e77fe0ff800ec3e84c701d0145aa10824ad8f558cd543f25421dbcdbc9c0_1.jpg"
        };
       

        //we don't call the function here.. just pass it plus variables to the action
        //we do however dispatch.. this triggers the thunk
        return dispatch(addMediaImage(addMediaImageMutation, variables));
    };

    return (
        <div className="viewHome">
            <RaisedButton
                label="LETS TOAST"
                style={{margin: 12}}
                onClick={_goToast}/>

            <RaisedButton
                label="LETS MUTATE"
                style={{margin: 12}}
                onClick={_goMutate}/>


            <If condition={ someMediaImage.name !== ""  }>
                <Then>
                    <Card>
                        <CardMedia>
                            <img src={someMediaImage.cdnUrl} />
                        </CardMedia>
                        <CardTitle title="MUTATION" subtitle={someMediaImage.name} />
                    </Card>
                </Then>
                <Else>{() => // will only be evaluated if the condition fails.
                    <div>Waiting for MUTATION to happen...</div>
                }</Else>
            </If>

            <Toast />
        </div>
    );
   
};

View_Home.propTypes = {
    openToast: React.PropTypes.func, //action
    addMediaImageMutation: React.PropTypes.func, //the mutation
    addMediaImage: React.PropTypes.func, //action
    someMediaImage: React.PropTypes.object //state
};


View_Home.displayName = "View Home";
export default View_Home;