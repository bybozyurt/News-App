import {useSelector} from 'react-redux';

export function getLang(){
    const language = useSelector(state => state.system.language)

    return language;
}

export function getDarkMode(){
    const isDark = useSelector(state => state.system.isDarkMode)
    
    return isDark;
}

export function getCategory(){
    const category = useSelector(state => state.system.category)

    return category;
}

export function getCountry(){
    const country = useSelector(state => state.system.country)

    return country;
}
