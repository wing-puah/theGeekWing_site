import { ACTIONS, ActionItem } from './actions';


export type state = {
    loadText: boolean;
};


const initialState: state = { loadText: false };

const reducer = (state: state = initialState, action: ActionItem): state => {
    switch (action.type) {
        case ACTIONS.endCameraPan:
            return {
                ...state,
                loadText: true,
            };

        default:
            return state;
    }
};


export { reducer, initialState, };