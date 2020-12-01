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
    mealNum: 0,
    time: '',
};

export const SET_DINNER_NAME = 'SET_DINNER_NAME';
export const SET_DINNER_STYLE = 'SET_DINNER_STYLE';
export const SET_DINNER_OPTION = 'SET_DINNER_OPTION';
export const BACK_TO_DINNER = 'BACK_TO_DINNER';
export const BACK_TO_STYLE = 'BACK_TO_STYLE';
export const BACK_TO_OPTION = 'BACK_TO_OPTION';

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
    }
};

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

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_DINNER_NAME:
            return {
                ...state,
                step: 2,
                dinnerId: action.data.id,
                dinnerName: action.data.name,
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
        case BACK_TO_DINNER:
            return {
                ...state,
                step: 1,
                dinnerId: '',
                dinnerName: '',
                special: '',
                price: 0,
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
        default:
            return state;
    }
};

export default reducer;