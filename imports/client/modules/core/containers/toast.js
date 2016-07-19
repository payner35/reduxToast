import {useDeps, composeAll, compose} from 'mantra-core';
import toast from '../components/toast';
import { connect } from 'react-apollo';



function mapStateToProps(state) {
    //feed some state into the props..
    //the Reducers are responsible for changing the State Object
    return {
        toastOpen: state.core.toastOpen,
        message: state.core.message
    }
}

export const mapDepsToProps = (context, actions) => ({
    closeToast: actions.toast.closeToast,
    context: () => context
});


export default composeAll(
    connect({
        mapStateToProps
    }),
    useDeps(mapDepsToProps)
)(toast);
