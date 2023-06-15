import {REQ_START,REQ_SUCCESS,REQ_FAILED,LOGIN_SUCCESS,LOGIN_FAILED,REG_SUCCESS,REG_FAILED,SET_USER,SET_LOGOUT} from './types';

const user = sessionStorage.getItem('user');
const token = sessionStorage.getItem('token');
const expires = sessionStorage.getItem('expires');
const isAuthx = sessionStorage.getItem('isAuth');

const initState = {
    loading:false,
    user:user||null,
    token:token||null,
    expires:expires||0,
    isAuth:Boolean(isAuthx)||false,
    msg:'',
    regMsg:'',
    statusCode:0,
    regSuccess:false

}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case REQ_START:
            return{
                ...state,
                loading:true
            }
        case REQ_SUCCESS:
            return{
                ...state,
                loading:false,
                statusCode:200,
                msg:action.payload.msg
            }
        case REQ_FAILED:
            return{
                ...state,
                loading:false,
                statusCode:401,
                
            }
        case REG_SUCCESS:
            return{
                ...state, 
                regSuccess:true,
                msg:action.payload.msg
            }
        case REG_FAILED:
		return{
			...state, 
			regSuccess:false,
			regMsg:action.payload.msg
		}
        case LOGIN_SUCCESS:
            sessionStorage.setItem('user',JSON.stringify(action.payload.user));
            sessionStorage.setItem('token',action.payload.token);
            sessionStorage.setItem('expires',action.payload.expires);
            sessionStorage.setItem('isAuth',true);
            return{
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                expires:action.payload.expires,
                isAuth:true,
                statusCode:200,
                loading:false,
                msg:action.payload.msg
            }
        case LOGIN_FAILED:
            return{
                ...state,
                loading:false,
                statusCode:401,
                msg:action.payload.msg,
                isAuth:false
            }
        case SET_LOGOUT:
            sessionStorage.clear(); 
            return{
                ...state,
                user:null,
                token:null,
                expires:0,
                isAuth:false,
                statusCode:200,
                loading:false, 
            }
            case 'RESET_MSG':
                return{
                    ...state,
                    msg:''
                }
            case 'REQ_GANTI_PASSWORD_SUCCESS':
                return{
                    ...state,
                    statusCode:200,
                    msg:action.payload.msg
                }
            case 'REQ_GANTI_PASSWORD_FAILED':
                return{
                    ...state,
                    statusCode:401,
                    msg:action.payload.msg
                }
            case 'GANTI_PASSWORD_OK':
                return{
                    ...state,
                    statusCode:200, 
                }
            case 'GANTI_PASSWORD_FAILED':
                return{
                    ...state,
                    statusCode:401, 
                }
            case SET_USER:
                return{
                    ...state, 
                    user:action.payload.user,
                }
        default:
            return state;
    }
}

export default authReducer;