import {SET_LANGUAGE, SET_THEME, SHOW_HEADLINES, SHOW_SPORTS, SHOW_BUSINESS} from './actionTypes';

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

export function showHeadlines(payload){
    return{
        type: SHOW_HEADLINES,
        payload
    };
}

export function showSports(payload){
    return{
        type: SHOW_HEADLINES,
        payload
    };
}

export function showBusiness(payload){
    return{
        type: SHOW_BUSINESS,
        payload
    };
}