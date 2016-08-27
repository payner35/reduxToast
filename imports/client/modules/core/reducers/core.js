

const initialState = {
    //important to set defaults...
    toastOpen: false,
    message: "",
    someMediaImage: { name: "", cdnUrl: "" }
};


export function core(state = initialState, action = {}) {
    //picks up a dispatched event.. and updates the Redux State accordingly...
    switch (action.type) {
        case "TOAST_SWITCH":
            return {
                ...state,
                toastOpen: action.toastOpen,
                message: action.message
            };
        case "UPDATE_MEDIA":
            return {
                ...state,
                someMediaImage: action.someMediaImage
            };
        default:
            return state;
    }
}


export default core;