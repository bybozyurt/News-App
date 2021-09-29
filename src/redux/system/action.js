import {SET_LANGUAGE, 
        SET_THEME,
        
} from './actionTypes';

export function setTheme(payload){
    return{
        type: SET_THEME,
        payload
    };

}

export function setLanguage(payload){
    return{
        type: SET_LANGUAGE,
        payload
    };
}




