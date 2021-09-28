import {SET_LANGUAGE, 
        SET_THEME,
        SHOW_SPORTS,
        SHOW_BUSINESS,
        SHOW_FUN,
        SHOW_HEALTH,
        SHOW_SCIENCE,
        SHOW_TECHNOLOGY
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

export function showSports(payload){
    console.log('SportPayload', payload);
    return{
        type: SHOW_SPORTS,
        payload
    };
}

export function showBusiness(payload){
    return{
        type: SHOW_BUSINESS,
        payload
    };
}

export function showFun(payload){
    return{
        type: SHOW_FUN,
        payload
    };
}

export function showScience(payload){
    return{
        type: SHOW_SCIENCE,
        payload
    };
}

export function showHealth(payload){
    return{
        type: SHOW_HEALTH,
        payload
    };
}

export function showTechnology(payload){
    return{
        type: SHOW_TECHNOLOGY,
        payload
    };
}


