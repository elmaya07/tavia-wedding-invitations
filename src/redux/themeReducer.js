import {SET_THEME,REQ_START,REQ_SUCCESS,REQ_FAILED} from './types';

const themeName = sessionStorage.getItem('themeName');
const folder = sessionStorage.getItem('folder');

const initState = {
    loading:false,
    msg:'',
    status:false,
    themeName:themeName|| 'White Jasmine',
    folder:folder|| '01'
}

const themeReducer = (state=initState,action)=>{
    switch(action.type){
        case SET_THEME:
            return{
                ...state,
                loading:false,
                status:true,
                themeName:action.payload.themeName,
                folder:action.payload.folder,
            }
        default:
            return state;
    }
}

export default themeReducer;