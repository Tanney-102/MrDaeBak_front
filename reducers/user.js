import axios from 'axios';

export const initialState = {
    isLoggedIn: false,
    userInfo: {
        userId: '',
        userName: '',
        classification: ''
    },  
};

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// action creator => action 객체를 리턴하도록 함수화
export const loginRequest = async (form) => {
    let type = ''
    const data = {
        userId: '',
        userName: '',
        classification: '',
    };

    await axios.post('/login', form)
        .then(res => {
            const result = res.data;

            if(result.success == 'true') {
                localStorage.Token = result.access_token;
                type = LOG_IN;
                data.userId = result.user_id,
                data.userName = result.user_name,
                data.classification = result.classification
            } else {
                switch(result.message) {
                    case 'invalid id':
                        alert('유효하지 않은 아이디입니다.');
                        break;
                    case 'invalid pw':
                        alert('비밀번호가 틀렸습니다.');
                        break;
                    case 'invalid class':
                        alert('유효하지 않은 아이디입니다.');
                        break;
                    default:
                        alert('msg err');
                }
            }
        })
        .catch(err => {
            console.log(err);
            alert('로그인에 실패했습니다. : ' + err);
        });

    return {
        type,
        data,
    }
};

export const verifyLoginState = async () => {

    const config = {
        headers: localStorage.Token ? { Authorization: localStorage.Token } : {}
    }
    console.log(localStorage.Token);
    const action = await axios.get('/login', config)
        .then(res => {
            const result = res.data;

            if(result.logged_in === 'false') {
                return { type : '', data : { userId:'', userName:'', classification:'' } }
            }

            return {
                type : LOG_IN,
                data : {
                    userId : result.user_id,
                    userName : result.user_name,
                    classification : result.classification,
                }
            }
        })
        .catch(err => {
            console.log(err);
        });

    return action;
};

export const logoutRequest = () => {
    return {
        type: LOG_OUT
    }
};

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