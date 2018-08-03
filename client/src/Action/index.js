import axios from 'axios';
import {
    FETCH_USER,
    SEARCH_RESULT,
} from './types';


export const fetch_user = () => {
    return function(dispatch){
        axios.get('/auth/api_client')
            .then(res=>dispatch({type:FETCH_USER, payload: res.data}));
        
    }
};


export const search_result = (data) => {
    return function (dispatch) {
        axios.post('/search',data)
            .then(res=>dispatch({
                type:SEARCH_RESULT, payload:res.data
            }));
    }
}