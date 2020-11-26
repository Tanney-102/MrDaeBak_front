import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';

// reducer들을 합치기
const rootReducer = combineReducers({
    index: (state={}, action) => {
        switch(action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
});

export default rootReducer;