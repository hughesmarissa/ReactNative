import * as ActionTypes from './ActionTypes';

export const promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []}, action) => {

        switch (action.type) {
            case ActionTypes.ADD_PROMOTIONS:
                return {
                    isLoading: false,
                    errMess: null,
                    promotions: action.payload
                };
            case ActionTypes.PROMOTIONS_LOADING:
                return {
                    isLoading: true,
                    errMess: null,
                    promotions: []
                };
            case ActionTypes.PROMOTIONS_FAILED:
                return {
                    isLoading: false,
                    errMess: action.payload
                };
            default:
                return state;
        }
    };