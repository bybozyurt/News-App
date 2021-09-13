import {SET_LANGUAGE, SET_THEME, SHOW_BUSINESS, SHOW_HEADLINES, SHOW_SPORTS} from './actionTypes';

const initialState = {
    language:'tr',
    isDarkMode:false,
    country:'',
    category:'',
    apiKey:'f7a124b92a934e4f83b5e96e7a186dc5'
};

export function systemReducer(state = initialState, action){

    switch(action.type){

        case SET_LANGUAGE:
            return{...state, language:action.payload}

        case SET_THEME:
            return{...state, isDarkMode:action.payload}
        
        case SHOW_HEADLINES:
            return{
                ...state,
                country:'tr',
                category:'top-headlines',
                
            }
        
        case SHOW_BUSINESS:
            return{
                ...state,
                country:'tr',
                category:'business'
            }
        
        case SHOW_SPORTS:
            return{
                ...state,
                country:'tr',
                category:'sports'
            }
        
        default:
            return state;
        
    }   
}