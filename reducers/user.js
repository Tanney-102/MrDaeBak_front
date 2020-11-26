export const initialState = {
    isLoggedIn: false,
    userInfo: {
        userId: '',
        userName: '',
        address: '',
        classification: ''
    },  
};

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// action creator => action 객체를 리턴하도록 함수화
export const login = (data) => {
    return {
        type: LOG_IN,
        data,
    }
}

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                isLoggedIn: true,
                userInfo: action.data,
            };
        case LOG_OUT:
            return {
                isLoggedIn: false,
                userInfo: null,
            };
        default:
            return state;
    }
};

export default reducer;