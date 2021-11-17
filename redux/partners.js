import * as ActionTypes from './ActionTypes';

export const partners = (state = {
    isLoading: true,
    errMess: null,
    parftners: []},
    action) => {
        
        switch (action.type) {
            case ActionTypes.ADD_PARTNERS:
                return {
                    ...state,
                    isLoading: false,
                    errMess: null,
                    partners: action.payload
                };
            case ActionTypes.PARTNER_LOADING:
                return {
                    ...state,
                    isLoading: true,
                    errMess: null,
                    partners: []
                };
            case ActionTypes.PARTNERS_FAILED:
                return {
                    ...state,
                    isLoading: false, 
                    errMess: action.payload
                };
            default:
                return state;
        }
    };