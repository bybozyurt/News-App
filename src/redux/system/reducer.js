import {
    SET_LANGUAGE,
    SET_THEME, 
    
} from './actionTypes';

const initialState = {
    language:'tr',
    isDarkMode:false,
    apiKey:'f7a124b92a934e4f83b5e96e7a186dc5',
    country:'tr',
    category:''
};




export function systemReducer(state = initialState, action){

    

    switch(action.type){

        case SET_LANGUAGE:
            return{...state, language:action.payload}

        case SET_THEME:
            return{...state, isDarkMode:action.payload}

        
        default:
            return state;
        
    }   
}