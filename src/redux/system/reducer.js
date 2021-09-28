import {
    SET_LANGUAGE,
    SET_THEME, 
    SHOW_BUSINESS, 
    SHOW_SPORTS,
    SHOW_FUN,
    SHOW_HEALTH,
    SHOW_SCIENCE,
    SHOW_TECHNOLOGY
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

        case SHOW_BUSINESS:
            return{
                ...state,
                category:action.payload,
            }
        case SHOW_SPORTS:
            return{
                ...state,
                category:action.payload,
            }
        case SHOW_FUN:
            return{
                ...state,
                category:action.payload,

            }
        case SHOW_HEALTH:
            return{
                ...state,
                category:action.payload,
            }
        case SHOW_SCIENCE:
            return{
                ...state,
                category:action.payload,
            }
        case SHOW_TECHNOLOGY:
            return{
                ...state,
                category:action.payload,
            }
        
        default:
            return state;
        
    }   
}