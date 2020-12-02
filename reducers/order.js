import axios from 'axios';

export const initialState = {
    step: 1,
    dinnerId: '',
    dinnerName: '',
    special: '',
    dinnerStyle: '',
    option: [],
    price: 0,
    stylePrice: 0,
    optionPrice: 0,
    time: '',
    mealNum: '',
    address: '',
};

export const SET_DINNER_NAME = 'SET_DINNER_NAME';
export const SET_DINNER_STYLE = 'SET_DINNER_STYLE';
export const SET_DINNER_OPTION = 'SET_DINNER_OPTION';
export const SET_RESERV_TIME = 'SET_RESERV_TIME';
export const BACK_TO_DINNER = 'BACK_TO_DINNER';
export const BACK_TO_STYLE = 'BACK_TO_STYLE';
export const BACK_TO_OPTION = 'BACK_TO_OPTION';
export const BACK_TO_TIME_SEL = 'BACK_TO_TIME_SEL';
export const GO_TO_RESULT = 'GO_TO_RESULT';

export const setDinnerName = (data) => {
    return {
        type: SET_DINNER_NAME,
        data,
    };
};

export const setDinnerStyle = (style, special) => {
    const data = {
        style,
        price: 0,
    };

    if(special === 'true') {
        if(style === 'Deluxe') {
            data.price = 3000;
        }
    } else {
        if(style === 'Grand') {
            data.price = 4000;
        } else if(style === 'Deluxe') {
            data.price = 7000;
        }
    }

    return {
        type: SET_DINNER_STYLE,
        data,
    };
};

export const setDinnerOption = (data) => {
    const options = [];
    let priceSum = 0;

    data.forEach(v => {
        const tmp = {
            menuId: v.menuId,
            menuName: v.menuName,
            detail: v.detail,
        }
        options.push(tmp);
        priceSum += v.price;
    });

    return {
        type: SET_DINNER_OPTION,
        data: { 
            options,
            priceSum,
        },
    };
};

export const setReservTime = (time) => {
    return {
        type: SET_RESERV_TIME,
        data: {
            time,
        }
    };
}

export const backToDinner = () => {
    return {
        type: BACK_TO_DINNER,
    };
};

export const backToStyle = () => {
    return {
        type: BACK_TO_STYLE,
    };
};

export const backToOption = () => {
    return {
        type: BACK_TO_OPTION,
    };
};

export const backToTimeSel = () => {
    return {
        type: BACK_TO_TIME_SEL,
    };
}

export const goToResult = (mealNum, address) => {
    return {
        type: GO_TO_RESULT,
        data: {
            mealNum,
            address,
        }
    };
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_DINNER_NAME:
            return {
                ...state,
                step: 2,
                dinnerId: action.data.dinnerId,
                dinnerName: action.data.dinnerName,
                special: action.data.special,
                price: action.data.price,
            };
        case SET_DINNER_STYLE:
            return {
                ...state,
                step: 3,
                dinnerStyle: action.data.style,
                stylePrice: action.data.price,
            };
        case SET_DINNER_OPTION:
            return {
                ...state,
                step: 4,
                option: action.data.options,
                OptionPrice: action.data.priceSum,
            };
        case SET_RESERV_TIME:
            return {
                ...state,
                step:5,
                time: action.data.time,
            };
        case BACK_TO_DINNER:
            return {
                step: 1,
                dinnerId: '',
                dinnerName: '',
                special: '',
                dinnerStyle: '',
                option: [],
                price: 0,
                stylePrice: 0,
                optionPrice: 0,
                time: '',
                mealNum: '',
                address: '',
            };
        case BACK_TO_STYLE:
            return {
                ...state,
                step: 2,
                dinnerStyle: '',
                stylePrice: 0,
            };
        case BACK_TO_OPTION:
            return {
                ...state,
                step: 3,
                option: [],
                optionPrice: 0,
            };
        case BACK_TO_TIME_SEL:
            return {
                ...state,
                step: 4,
                time: '',
            };
        case GO_TO_RESULT:
            return {
                ...state,
                step:6,
                mealNum: action.data.mealNum,
                address: action.data.address,
            }
        default:
            return state;
    }
};

export default reducer;