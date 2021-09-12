import { types } from '../types/types';

export const parseReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.parse:
            return {
                ...state,
                parse: payload,
            };
        default:
            return state;
    }
};
