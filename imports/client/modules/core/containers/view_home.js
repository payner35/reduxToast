import {useDeps, composeAll, compose} from 'mantra-core';
import view_home from '../components/view_home';


export const depsMapper = (context, actions) => ({
    openToast: actions.toast.openToast,
    context: () => context
});

export default composeAll(
    useDeps(depsMapper)
)(view_home);