import {useSelector} from 'react-redux';

export function getLang(){
    const language = useSelector(state => state.system.language)

    return language;
}